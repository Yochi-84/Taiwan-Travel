import { createStore } from 'vuex'
import JsSHA from 'jssha'
import axios from 'axios'

export default createStore({
  state: {
    countyUrl: './CityCountyData.json',
    headers: {
      headers: ''
    },
    zipCode: {},
    cityCounty: [],
    initData: [],
    favoriteList: [],
    currentPage: 1,
    apiError: false,
    loadingStatus: false
  },
  getters: {
  },
  mutations: {
    headers (state) {
      const AppID = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF'
      const AppKey = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF'
      const GMTString = new Date().toGMTString()
      const ShaObj = new JsSHA('SHA-1', 'TEXT')
      ShaObj.setHMACKey(AppKey, 'TEXT')
      ShaObj.update('x-date: ' + GMTString)
      const HMAC = ShaObj.getHMAC('B64')
      const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"'

      state.headers.headers = { Authorization: Authorization, 'X-Date': GMTString }
    },
    tdxUrl (state, url) {
      state.tdxUrl = url
    },
    cityData (state, data) {
      state.cityCounty = data
    },
    tdxData (state, data) {
      // originalSpotData 與 cityCounty 比對ZipCode，加入縣市名與鄉鎮區名
      for (const i of data) {
        const zipMap = state.zipCode
        // 有些資料沒有ZipCode
        if (i.ZipCode) {
          // 有的ZipCode是5碼，取前3碼，如果ZipCode 相等，寫入資料
          if (zipMap[i.ZipCode.slice(0, 3)]) {
            i.CountyName = zipMap[i.ZipCode.slice(0, 3)].CountyName
            i.AreaName = zipMap[i.ZipCode.slice(0, 3)].AreaName
          }
        } else if (i.Address) {
          const regEx = /([\u4e00-\u9fa5]+[縣市])\d*(\D+?(市區|鎮區|鎮市|[鄉鎮市區]))*/g
          const regEx1 = /([縣市])/
          // 如果至少有縣市名
          if (i.Address.match(regEx)) {
            const regAddress = i.Address.match(regEx)[0].replace(regEx1, '$1 ').split(' ')
            if (regAddress[0]) {
              i.CountyName = regAddress[0]
            }

            if (regAddress[1]) {
              i.AreaName = regAddress[1].replace(/\d*/, '')
            } else {
              i.AreaName = null
            }
          } else {
            i.CountyName = null
            i.AreaName = null
          }
        } else {
          i.CountyName = null
          i.AreaName = null
        }
      }

      const idKind = Object.keys(data[0]).filter(item => item === 'ScenicSpotID' || item === 'RestaurantID' || item === 'ActivityID')[0]
      const temp = {}
      state.favoriteList.forEach(item => { temp[item.id] = true })
      data.forEach(item => {
        if (temp[item[idKind]]) {
          item.favorite = true
        } else {
          item.favorite = false
        }
      })

      // 加入Activity時間判斷
      if (data[0].ActivityName) {
        const date = new Date()
        const day = 1000 * 60 * 60 * 24
        data.forEach(item => {
          const countDown = (Date.parse(item.StartTime.split('T')[0]) - Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) / day
          const finish = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.parse(item.EndTime.split('T')[0])) / day
          if (countDown > 0) {
            item.timeStatus = countDown
          } else if (countDown <= 0 && finish <= 0) {
            item.timeStatus = 'In progress'
          } else {
            item.timeStatus = 'Over'
          }
        })
      }
      state.initData = data
    },
    apiError (state, status) {
      state.apiError = status
    },
    loadingToggle (state, status) {
      state.loadingStatus = status
    },
    changePage (state, number) {
      state.currentPage = number
    },
    favoriteToggle (state, obj) {
      const item = state.initData.filter(item => item[obj.kind + 'ID'] === obj.id)[0]
      if (!item.favorite) {
        state.favoriteList.push(obj)
      } else {
        for (let i = 0; i < state.favoriteList.length; i++) {
          if (state.favoriteList[i].id === obj.id) {
            state.favoriteList.splice(i, 1)
            break
          }
        }
      }
      item.favorite = !item.favorite
      localStorage.favorite = JSON.stringify(state.favoriteList)
    },
    loadFavorite (state) {
      if (localStorage.favorite) {
        state.favoriteList = JSON.parse(localStorage.favorite)
      }
    },
    getZipCode (state, data) {
      const map = {}
      data.forEach(item => {
        item.AreaList.forEach(element => { map[element.ZipCode] = { CountyName: item.CityName, AreaName: element.AreaName } })
      })
      state.zipCode = map
    }
  },
  actions: {
    async CountyApi ({ commit }) {
      await axios.get(
        this.state.countyUrl
      ).then(res => {
        if (!this.state.zipCode.length) {
          commit('getZipCode', res.data)
        }
        commit('cityData', res.data)
      }).catch(err => console.log(err))
    },
    async TDXApi ({ commit }, url) {
      if (this.state.apiError) commit('apiError', false)
      if (this.state.headers) commit('headers')
      await axios.get(url, this.state.headers)
        .then(res => { commit('tdxData', res.data) })
        .catch(err => {
          console.log(err)
          if (err.response.status === 429) {
            this.state.initData = []
            commit('apiError', true)
          }
        })
    },
    scrollToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  modules: {
  }
})
