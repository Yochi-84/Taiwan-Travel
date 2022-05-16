<template>
  <div class="show-area">
    <div class="view-category">
      <ul>
        <li v-for="(item, index) of category" :key="item.category" :class="{ isActive: currentCategory === index }" @click="getResult(index)">{{ item.title }}</li>
      </ul>
    </div>
    <div class="search-result">
      <div class="filter-bar">
        <h3>共有<span>{{ showData.length }}</span>筆搜尋結果</h3>
        <div class="sort-way">
          <small>排序方式</small>
          <select name="sort" id="sort">
            <option value="about" selected>相關結果優先</option>
            <option value="new">最新結果優先</option>
          </select>
        </div>
        <div class="pc-bar">
          <div class="service-info" v-if="currentCategory !== 2">
            <small>服務資訊</small>
            <div class="service-info-item" v-for="item of category[currentCategory].service" :key="item.title">
              <label :for="item.name" :class="{ isChecked: item.checked }">{{ item.title }}</label>
              <input type="checkbox" :id="item.name" v-model="item.checked">
            </div>
          </div>
          <div v-else>
          <div class="activity-condition">
            <small>活動檔期</small>
            <div class="activity-condition-item" v-for="item of category[currentCategory].condition" :key="item.title">
              <label :for="item.name" :class="{ isChecked: item.checked }">{{ item.title }}</label>
              <input type="checkbox" :id="item.name" v-model="item.checked">
            </div>
          </div>
          <div class="activity-time">
            <small>指定時段</small>
            <input type="date">
          </div>
        </div>
          <div class="theme">
            <small>主題類別</small>
            <div class="theme-item" v-for="item of category[currentCategory].theme" :key="item.title" @click="item.selected = !item.selected" :class="{ isActive: item.selected }">{{ item.title }}</div>
          </div>
        </div>
      </div>

      <div class="view-area">
        <div class="have-keyword" v-if="!noKeyword && !apiError">
          <div class="show-card" v-for="item of showData.slice(dataStartIndex, dataStartIndex+12)" :key="item[currentSearch.en +'Name']+ '_' +item[currentSearch.en +'ID']" @click="goPath({path:'/info', query:{kind: currentSearch.en, id: item[currentSearch.en +'ID'] }})">
            <div class="card-pic" :style="{ backgroundImage: 'url(' + item.Picture.PictureUrl1 + ')' }" v-if="item.Picture.PictureUrl1">
              <img src="@/assets/nav_icon/heart/outline.svg" alt="加入收藏" title="加入收藏" @click.stop="favoriteToggle(currentSearch.en ,item[currentSearch.en +'ID'])" v-show="!item.favorite">
              <img class="favorite" src="@/assets/nav_icon/heart/filled.svg" alt="加入收藏" title="加入收藏" @click.stop="favoriteToggle(currentSearch.en ,item[currentSearch.en +'ID'])" v-show="item.favorite">
            </div>
            <div class="card-pic no-pic" :style="{ backgroundImage: `url(${require('@/assets/missing/miss' + currentSearch.en + '.png')})` }" v-else>
              <img src="@/assets/nav_icon/heart/outline.svg" alt="加入收藏" title="加入收藏" @click.stop="favoriteToggle(currentSearch.en ,item[currentSearch.en +'ID'])" v-show="!item.favorite">
              <img class="favorite" src="@/assets/nav_icon/heart/filled.svg" alt="加入收藏" title="加入收藏" @click.stop="favoriteToggle(currentSearch.en ,item[currentSearch.en +'ID'])" v-show="item.favorite">
              <p class="no-pic-text">此{{ currentSearch.ch}}尚未提供圖片</p>
            </div>
            <h4>{{ item[currentSearch.en +'Name'] }}</h4>
            <p v-if="currentSearch.en !== 'Activity'">
              <img src="@/assets/icon/map-pin.svg" alt=""><span v-if="item.CountyName">{{ item.CountyName }}</span><span v-else>請見詳情頁</span><span v-if="item.AreaName">{{ item.AreaName }}</span>
            </p>
            <p v-else>
              <img src="@/assets/icon/clock.svg" alt=""><span v-if="item.timeStatus === 'In progress'">熱鬧進行中</span><span v-else-if="item.timeStatus === 'Over'">已結束</span><span v-else>再 {{ item.timeStatus }} 天</span>
            </p>
          </div>
          <div class="page-controller">
            <PageController :totalPage="totalPage"></PageController>
          </div>
        </div>
        <div class="no-keyword" v-else-if="noKeyword && !apiError">
          <img src="@/assets/icon/noResult.svg" alt="">
          <h3>請輸入搜尋關鍵字</h3>
          <small>當前沒有搜尋關鍵字，請先輸入欲搜尋的關鍵字</small>
        </div>
        <div class="api-error" v-else>
          <img src="@/assets/icon/apiError.svg" alt="">
          <h3>請求次數過多</h3>
          <small>好啦!我的Api次數被你call爆了，晚點再試吧!!</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import PageController from '@/components/Search/PageController.vue'

export default {
  components: {
    PageController
  },
  props: ['keyword'],
  setup (props) {
    const route = useRoute()
    const store = useStore()

    const category = ref([
      {
        title: '找景點',
        category: 'Attractions',
        service: [
          {
            title: '停車場',
            name: 'ParkingInfo',
            checked: false
          },
          {
            title: '購票資訊',
            name: 'TicketInfo',
            checked: false
          }
        ],
        theme: [
          {
            title: '北台灣',
            selected: false
          },
          {
            title: '中台灣',
            selected: false
          },
          {
            title: '南臺灣',
            selected: false
          },
          {
            title: '東台灣',
            selected: false
          },
          {
            title: '離島地區',
            selected: false
          }
        ]
      },
      {
        title: '找美食',
        category: 'Delicacy',
        service: [
          {
            title: '停車場',
            name: 'ParkingInfo',
            checked: false
          }
        ],
        theme: [
          {
            title: '飽餐一頓',
            selected: false
          },
          {
            title: '清涼消暑',
            selected: false
          },
          {
            title: '在地美味',
            selected: false
          },
          {
            title: '特色名產',
            selected: false
          }
        ]
      },
      {
        title: '找活動',
        category: 'Activity',
        condition: [
          {
            title: '即將開始',
            checked: false
          },
          {
            title: '進行中',
            checked: false
          }
        ],
        theme: [
          {
            title: '藝文展演',
            selected: false
          },
          {
            title: '戶外露營',
            selected: false
          },
          {
            title: '親近山海',
            selected: false
          },
          {
            title: '年度慶典',
            selected: false
          }
        ]
      }
    ])

    const currentCategory = ref(0)
    const currentSearch = ref({ en: 'ScenicSpot', ch: '景點' })
    const noKeyword = ref(true)
    const apiError = computed(() => store.state.apiError)

    const initData = computed(() => store.state.initData)
    const showData = ref([])
    const currentPage = computed(() => store.state.currentPage)
    const dataStartIndex = computed(() => (currentPage.value - 1) * 12)
    const totalPage = computed(() => Math.ceil(showData.value.length / 12))

    function favoriteToggle (kind, id) {
      const obj = {
        kind: kind,
        id: id
      }
      store.commit('favoriteToggle', obj)
    }

    function goPath (path) {
      router.push(path)
      store.dispatch('scrollToTop')
    }

    function getResult (index) {
      if (index !== undefined) {
        currentCategory.value = index
        store.commit('changePage', 1)
      }

      switch (index) {
        case 0:
          currentSearch.value.en = 'ScenicSpot'
          currentSearch.value.ch = '景點'
          break
        case 1:
          currentSearch.value.en = 'Restaurant'
          currentSearch.value.ch = '美食'
          break
        case 2:
          currentSearch.value.en = 'Activity'
          currentSearch.value.ch = '活動'
          break
      }

      // 有keyword才查
      if (props.keyword !== '' && route.params.keyword !== '') {
        if (props.keyword !== '') {
          const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/${currentSearch.value.en}?%24filter=contains(${currentSearch.value.en + 'Name'}%2C'${encodeURI(props.keyword)}')&&%24%24format=JSON`

          store.commit('loadingToggle', true)
          store.dispatch('TDXApi', url)
          setTimeout(() => store.commit('loadingToggle', false), 1000)
        } else {
          if (route.params.keyword !== '') {
            const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/${currentSearch.value.en}?%24filter=contains(${currentSearch.value.en + 'Name'}%2C'${route.params.keyword}')&&%24%24format=JSON`

            store.commit('loadingToggle', true)
            store.dispatch('TDXApi', url)
            setTimeout(() => store.commit('loadingToggle', false), 1000)
          }
        }
      } else {
        store.commit('tdxData', [])
        noKeyword.value = true
      }
    }

    watch(
      props, () => {
        if (props.keyword !== '') {
          noKeyword.value = false
          getResult()
        } else {
          noKeyword.value = true
          store.commit('tdxData', [])
        }
      },
      {
        deep: true
      }
    )

    // 監聽checkbox以篩選資料
    function checkboxFilter () {
      const checkedIndex = []
      let checkedCategory = []
      checkedCategory = category.value[currentCategory.value].service
      if (currentCategory.value === 2) {
        checkedCategory = category.value[currentCategory.value].condition
      }

      for (let i = 0; i < checkedCategory.length; i++) {
        if (checkedCategory[i].checked) {
          checkedIndex.push(i)
        }
      }

      if (currentCategory.value === 2) {
        switch (checkedIndex.length) {
          case 0:
            showData.value = initData.value
            break
          case 1:
            if (checkedIndex[0] === 0) {
              showData.value = initData.value.filter(item => item.timeStatus !== 'In progress' && item.timeStatus !== 'Over')
            } else {
              showData.value = initData.value.filter(item => item.timeStatus === 'In progress')
            }
            break
          case 2:
            showData.value = initData.value.filter(item => item.timeStatus !== 'Over')
            break
        }
      } else {
        switch (checkedIndex.length) {
          case 0:
            showData.value = initData.value
            break
          case 1:
            showData.value = initData.value.filter(item => item[category.value[currentCategory.value].service[checkedIndex[0]].name])
            break
          case 2:
            showData.value = initData.value.filter(item => item[category.value[currentCategory.value].service[0].name] || item[category.value[currentCategory.value].service[1].name])
            break
        }
      }
      store.commit('changePage', 1)
    }

    // 監聽category
    watch(
      category.value, () => {
        checkboxFilter()
      }
    )

    // 監聽initData
    watch(
      initData, () => {
        checkboxFilter()
      },
      {
        deep: true
      }
    )

    onMounted(() => {
      switch (route.params.kind) {
        case 'Attractions':
          currentCategory.value = 0
          break
        case 'Delicacy':
          currentCategory.value = 1
          break
        case 'Activity':
          currentCategory.value = 2
          break
      }
    })

    onMounted(() => {
      store.commit('loadFavorite')
      if (!route.params.keyword) {
        if (props.keyword !== '') {
          const key = props.keyword
          const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24filter=contains(ScenicSpotName%2C'${key}')%20or%20contains(Address%2C'${key}')%20or%20contains(keyword%2C'${key}')&%24format=JSON`

          store.commit('loadingToggle', true)
          store.dispatch('TDXApi', url)
          setTimeout(() => store.commit('loadingToggle', false), 1000)
        } else {
          if (route.params.index !== undefined) {
            noKeyword.value = false
            let url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/'
            category.value[currentCategory.value].theme[route.params.index].selected = true
            switch (currentCategory.value) {
              case 0:
                currentSearch.value.en = 'ScenicSpot'
                currentSearch.value.ch = '景點'
                url += 'ScenicSpot?%24filter='
                switch (route.params.index) {
                  case '0':
                    url += 'contains(City, \'台北\') or contains(City, \'新北\') or contains(City, \'基隆\') or contains(City, \'桃園\') or contains(City, \'新竹\') or contains(City, \'宜蘭\')'
                    break
                  case '1':
                    url += 'contains(City, \'苗栗\') or contains(City, \'台中\') or contains(City, \'彰化\') or contains(City, \'南投\') or contains(City, \'雲林\')'
                    break
                  case '2':
                    url += 'contains(City, \'嘉義\') or contains(City, \'台南\') or contains(City, \'高雄\') or contains(City, \'屏東\')'
                    break
                  case '3':
                    url += 'contains(City, \'花蓮\') or contains(City, \'台東\')'
                    break
                  case '4':
                    url += 'contains(City, \'連江\') or contains(City, \'金門\') or contains(City, \'澎湖\')'
                    break
                }
                break
              case 1:
                currentSearch.value.en = 'Restaurant'
                currentSearch.value.ch = '美食'
                url += 'Restaurant?%24filter='
                switch (route.params.index) {
                  case '0':
                    url += 'contains(RestaurantName, \'便當\') or contains(RestaurantName, \'餐廳\') or contains(RestaurantName, \'料理\') or contains(RestaurantName, \'簡餐\') or contains(RestaurantName, \'飯店\')'
                    break
                  case '1':
                    url += 'contains(RestaurantName, \'飲料\') or contains(RestaurantName, \'冰果\') or contains(RestaurantName, \'冰品\') or contains(RestaurantName, \'果汁\') or contains(Description, \'飲料\') or contains(Description, \'冰品\')'
                    break
                  case '2':
                    url += 'contains(RestaurantName, \'小吃\') or contains(Description, \'小吃\') or contains(Description, \'在地\')'
                    break
                  case '3':
                    url += 'contains(RestaurantName, \'名產\') or contains(Description, \'名產\') or contains(Description, \'伴手禮\') or contains(Description, \'土產\') or contains(Description, \'特產\')'
                    break
                }
                break
              case 2:
                currentSearch.value.en = 'Activity'
                currentSearch.value.ch = '活動'
                url += 'Activity?%24filter='
                switch (route.params.index) {
                  case '0':
                    url += 'contains(Class1, \'藝文\') or contains(Class2, \'藝文\')'
                    break
                  case '1':
                    url += 'contains(ActivityName, \'露營\')'
                    break
                  case '2':
                    url += 'contains(ActivityName, \'山\') or contains(ActivityName, \'海\')'
                    break
                  case '3':
                    url += 'contains(Class1, \'節慶\') or contains(Class2, \'節慶\')'
                    break
                }
                break
            }
            url += '&%24format=JSON'

            store.commit('loadingToggle', true)
            store.dispatch('TDXApi', url)
            setTimeout(() => store.commit('loadingToggle', false), 1000)
          }
        }
      } else {
        noKeyword.value = false
        const key = route.params.keyword
        const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24filter=contains(ScenicSpotName%2C'${key}')%20or%20contains(Address%2C'${key}')%20or%20contains(keyword%2C'${key}')&%24format=JSON`

        store.commit('loadingToggle', true)
        store.dispatch('TDXApi', url)
        setTimeout(() => store.commit('loadingToggle', false), 1000)
      }
    })

    return {
      route,
      noKeyword,
      apiError,
      category,
      showData,
      currentCategory,
      currentSearch,
      currentPage,
      dataStartIndex,
      totalPage,

      favoriteToggle,
      goPath,
      getResult
    }
  }
}
</script>

<style scoped lang="scss">
.show-area {
  .view-category {
    ul {
      display: flex;
      justify-content: center;
      width: 100%;

      li {
        padding: 16px 30px;
        margin: 0 30px;
        font-size: 20px;
        font-weight: 700;
        white-space: nowrap;
        color: $text-gray;
        cursor: pointer;

        @include pad {
          margin: 0;
        }

        @include phone {
          font-size: 14px;
        }

        &.isActive {
          position: relative;
          color: $main-green;

          &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            content: "";
            border-bottom: 2px solid $main-green;
          }
        }
      }
    }
  }

  .search-result {
    display: flex;
    padding: 0 100px;
    background: #fafafa;

    @include pad {
      flex-wrap: wrap;
      padding: 0 20px 50px;
    }

    @include phone {
      padding: 0 5% 50px;
    }

    .filter-bar {
      display: flex;
      flex-direction: column;
      padding: 16px 20px 0 10px;
      width: 20%;

      @include pad {
        justify-content: space-between;
        align-items: center;
        width: 100%;
        flex-direction: row;
      }

      h3 {
        font-size: 20px;
        color: $text-gray;

        span {
          padding: 0 10px;
          font-size: 28px;
          color: $main-green;
        }
      }

      small {
        display: block;
        padding-bottom: 16px;
        font-size: 12px;
        font-weight: 600;
        color: #acacac;
        letter-spacing: 0.05em;

        @include pad {
          display: none;
        }
      }

      .sort-way {
        padding: 32px 0 16px;

        select {
          padding: 10px;
          width: 100%;
          color: $text-gray;
          background: #fff;
          border: 0.5px solid $text-gray;
          border-radius: 5px;

          &:focus {
            outline-color: $main-green;
          }
        }
      }

      .pc-bar {
        @include pad {
          display: none;
        }

        .service-info,
        .activity-condition {
          padding: 16px 0;

          .service-info-item,
          .activity-condition-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2px 0;

            input[type="checkbox"] {
              position: relative;
            }

            input[type="checkbox"]::before,
            input[type="checkbox"]::after {
              position: absolute;
              display: block;
              width: 13px;
              height: 13px;
              text-align: center;
              border-radius: 2px;
              content: "";
              line-height: 12px;
            }

            input[type="checkbox"]:checked::after {
              top: 1px;
              left: 1px;
              color: #fff;
              content: "✓";
            }

            input[type="checkbox"]::before {
              content: " ";
              background-color: #fff;
              border: 0.5px solid $text-gray;
            }

            input[type="checkbox"]:checked::before {
              background-color: $main-green;
            }

            label {
              font-size: 14px;
              letter-spacing: 0.05em;
              color: $text-gray;
              flex-grow: 1;

              &.isChecked {
                color: $main-green;
              }
            }
          }
        }

        .activity-condition {
          padding: 16px 0;
        }

        .activity-time {
          padding: 16px 0;

          input[type="date"] {
            padding: 10px;
            width: 100%;
            border: 0.5px solid $text-gray;
            border-radius: 5px;
            box-sizing: border-box;

            &:focus {
              outline-color: $main-green;
            }
          }
        }

        .theme {
          padding: 16px 0;

          .theme-item {
            padding: 8px 0;
            margin-bottom: 8px;
            width: 100%;
            font-size: 14px;
            text-align: center;
            color: $text-gray;
            border: 0.5px solid $text-gray;
            border-radius: 5px;
            letter-spacing: 0.15em;
            cursor: pointer;

            &:hover {
              color: $main-green;
              border-color: $main-green;
            }

            &.isActive {
              color: #fff;
              background: $main-green;
              border-color: $main-green;
            }
          }
        }
      }
    }

    .view-area {
      padding-top: 60px;
      width: 80%;

      @include pad {
        width: 100%;
      }

      .have-keyword {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .show-card {
          padding: 8px;
          width: 33.3%;
          color: $text-gray;
          box-sizing: border-box;
          cursor: pointer;

          @include pad {
            width: 50%;
          }

          @include phone {
            width: 100%;
          }

          .card-pic {
            position: relative;
            width: 100%;
            min-height: 200px;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 5px;

            img {
              position: absolute;
              top: 10px;
              right: 10px;
              filter: brightness(3);
              cursor: pointer;

              &.favorite {
                filter: none;
              }
            }

            &.no-pic {
              @include flex-center;

              p {
                font-size: 14px;
                color: #fff;
                letter-spacing: 0.05em;
              }
            }
          }

          h4 {
            overflow: hidden;
            padding: 8px 0;
            padding-left: 5px;
            font-size: 20px;
            text-overflow: ellipsis;
            white-space: nowrap;
            letter-spacing: 0.1em;
          }

          p {
            display: flex;
            align-items: center;
            padding-left: 5px;

            img {
              width: 16px;
              height: 16px;
            }

            span {
              padding: 0 2px;
              font-size: 14px;
              letter-spacing: 0.1em;
            }
          }
        }

        .page-controller {
          padding: 40px 8px;
          width: 100%;
        }
      }

      .no-keyword,
      .api-error {
        width: 100%;
        height: 100%;

        @include flex_center;

        flex-direction: column;

        h3 {
          font-size: 28px;
          letter-spacing: 0.08em;
          color: $text-gray;
          line-height: 1.5;
        }

        small {
          font-size: 16px;
          letter-spacing: 0.1em;
          color: $text-gray;
        }
      }
    }
  }
}
</style>
