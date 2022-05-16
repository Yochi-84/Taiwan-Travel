<template>
    <div class="info-area"  v-for="info of information" :key="info[kind + 'Name']">
        <div class="bread-share">
          <BreadArea :kind="kind" :spot="info[kind + 'Name']"></BreadArea>
          <div class="share">
            <span><span>分享給你的旅伴</span><i class="fa-solid fa-share-nodes"></i></span>
          </div>
        </div>
        <div class="main-info">
          <div class="main-info-text">
            <div class="view-tag" v-if="tag.length > 0">
              <ul>
                <li v-for="num of tag.length" :key="num" v-show="info['Class'+ num ]">{{ '# ' + info['Class'+ num ] }}</li>
                <li v-if="info.Level">{{ '# ' + info.Level }}</li>
              </ul>
            </div>
            <h2>{{ info[kind + 'Name'] }}
              <img src="@/assets/nav_icon/heart/outline.svg" alt="加入收藏" title="加入收藏" @click="favoriteToggle(kind, info[kind + 'ID'])" v-show="!info.favorite">
              <img src="@/assets/nav_icon/heart/filled.svg" alt="加入收藏" title="加入收藏" @click="favoriteToggle(kind, info[kind + 'ID'])" v-show="info.favorite">
            </h2>
            <div class="address">
              <img src="@/assets/icon/map-pin1.svg" alt=""><span>{{ info.Address }}</span><a :href="url" type="button">查看地圖</a>
            </div>
            <div class="phone">
              <img src="@/assets/icon/phone.svg" alt="">
              <div v-if="info.Phone"><span
              >{{ info.Phone }}</span><a href="#" type="button" >點擊撥號</a></div>
              <div v-else><span>沒有相關資訊</span></div>
            </div>
            <div class="open-time">
              <img src="@/assets/icon/clock.svg" alt="">
              <span v-if="kind !== 'Activity'" v-html="openTime"></span>
              <span v-else>{{ formattedPeriod }}</span>
            </div>
          </div>
          <div class="main-info-pic" :style="{ backgroundImage: 'url(' + info.Picture.PictureUrl1 +')' }" v-if="Object.keys(info.Picture).length !== 0"></div>
          <div class="main-info-pic no-pic" :style="{ backgroundImage: `url(${require('@/assets/missing/miss' + kind + '.png')})` }" v-else>
            <p class="no-pic_text">此景點尚未提供圖片</p>
          </div>
        </div>
        <div class="description">
          <h3>特色簡介</h3>
          <p>{{ formattedDesc }}</p>
        </div>
        <div class="about" v-if="kind !== 'Activity'">
          <div class="service">
            <h4>服務設施</h4>
            <p>
              <span v-if="info.ParkingInfo">停車場</span>
              <span v-else>沒有相關資訊</span>
            </p>
          </div>
          <div class="traffic">
            <h4>交通方式</h4>
            <p>
              <span v-if="info.TravelInfo" v-html="formattedTraffic"></span>
              <span v-else>沒有相關資訊</span>
            </p>
          </div>
          <div class="remark">
            <h4>注意事項</h4>
            <p>
              <span v-if="info.Remarks" v-html="formattedRemarks"></span>
              <span v-else>沒有相關資訊</span>
            </p>
          </div>
        </div>
        <div class="about" v-else>
          <div class="organizer">
            <h4>主辦單位</h4>
            <p>
              <span v-if="info.Organizer">{{ info.Organizer }}</span>
              <span v-else>沒有相關資訊</span>
            </p>
          </div>
          <div class="participation">
            <h4>活動參與對象</h4>
            <p>
              <span v-if="info.Participation">{{ info.Participation }}</span>
              <span v-else>沒有相關資訊</span>
            </p>
          </div>
          <div class="website">
            <h4>活動網址</h4>
            <p>
              <span v-if="info.WebsiteUrl"><a type="button" :href="info.WebsiteUrl">點擊前往</a></span>
              <span v-else>沒有相關資訊</span>
            </p>
          </div>
        </div>
    </div>
</template>

<script>
import BreadArea from '@/components/BreadArea.vue'
import { onMounted, computed } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    BreadArea
  },
  setup () {
    const route = useRoute()
    const store = useStore()
    const kind = route.query.kind
    const information = computed(() => store.state.initData)
    const tag = computed(() => Object.keys(information.value[0]).filter(item => item.indexOf('Class') === 0))

    const url = computed(() =>
      information.value[0].Position &&
      'https://www.google.com.tw/maps/@' + information.value[0].Position.PositionLat + ',' + information.value[0].Position.PositionLon + ',17z?hl=zh-TW'
    )

    // description 中文與英數字之間加空格
    const formattedDesc = computed(() => {
      let detail = information.value[0].Description
      const regEx1 = /([\u4e00-\u9fa5]+)([\da-zA-Z]+)([\u4e00-\u9fa5]+)([\da-zA-Z]+)/g
      const regEx2 = /([\u4e00-\u9fa5]+)([\da-zA-Z]+)([\u4e00-\u9fa5]+)/g
      if (kind === 'ScenicSpot') {
        detail = information.value[0].DescriptionDetail
      }
      return detail
        .replaceAll(regEx1, '$1 $2 $3 $4 ')
        .replaceAll(regEx2, '$1 $2 $3 ')
    })

    const openTime = computed(() => {
      let time = ''
      if (kind !== 'Activity') {
        const regEx = /(週[一二三四五六日])/g
        const regEx1 = /(:[0-9]{2})([\u4e00-\u9fa5]+)/g
        time = information.value[0].OpenTime
          .toLowerCase()
          .replace('sun', '週日')
          .replace('mon', '週一')
          .replace('tue', '週二')
          .replace('wed', '週三')
          .replace('thu', '週四')
          .replace('fri', '週五')
          .replace('sat', '週六')
          .replaceAll(' ', '')
          .replaceAll(',', '')
          .replaceAll('，', '')
          .replaceAll(';', '')
          .replaceAll('；', '')
          .replaceAll('hours', '小時')
          .replaceAll(regEx, '$1： ')
          .replaceAll(regEx1, '$1<br>$2')
          .replaceAll('小時', '小時<br>')
      }
      return time
    })

    const formattedTraffic = computed(() =>
      information.value[0].TravelInfo &&
      information.value[0].TravelInfo
        .replaceAll('。', '。<br>')
    )
    const formattedRemarks = computed(() =>
    // 如果 Remarks 是 true 就替換
      information.value[0].Remarks &&
      information.value[0].Remarks
        .replaceAll('。。', '。')
        .replaceAll('\\\\', '\\')
        .replaceAll('<.{1,3}>', '')
        .replaceAll('\\[a-zA-Z]', '')
        .replaceAll('。', '。<br>')
    )

    const formattedPeriod = computed(() => information.value[0].StartTime.split('T')[0] + ' ~ ' + information.value[0].EndTime.split('T')[0]
    )
    function favoriteToggle (kind, id) {
      const obj = {
        kind: kind,
        id: id
      }
      store.commit('favoriteToggle', obj)
    }

    onMounted(() => {
      const url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/${kind}?%24filter=${kind}ID%20eq%20'${route.query.id}'&%24top=1&%24format=JSON`
      store.dispatch('TDXApi', url)
      if (store.state.apiError) router.push('search')
    })

    return {
      kind,
      information,
      tag,
      url,
      openTime,
      formattedDesc,
      formattedTraffic,
      formattedRemarks,
      formattedPeriod,

      favoriteToggle
    }
  }
}
</script>

<style scoped lang="scss">
.info-area {
  .bread-share {
    display: flex;
    justify-content: space-between;
    padding: 50px 200px 80px;
    width: 100%;
    box-sizing: border-box;

    @include pad {
      display: none;
    }

    .share {
      span {
        color: $light-gray;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          color: $main-green;
        }

        span {
          margin-right: 5px;
        }
      }
    }
  }

  .main-info {
    display: flex;
    padding: 16px 200px;
    background: $light-green;
    box-sizing: border-box;

    @include pad {
      padding: 30px 20px;
      flex-direction: column-reverse;
    }

    .main-info-text {
      display: flex;
      width: 45%;
      flex-direction: column;

      @include pad {
        padding: 16px 20px;
        width: 100%;
      }

      @include phone {
        padding: 0 5% 50px;
      }

      .view-tag {
        padding: 4px 0;

        ul {
          display: flex;

          li {
            color: $main-green;

            &:not(:last-of-type) {
              padding-right: 15px;
            }
          }
        }
      }

      h2 {
        display: flex;
        align-items: center;
        padding: 4px 0;
        font-size: 28px;
        font-weight: 700;
        color: $text-gray;
        letter-spacing: 0.05em;

        img {
          margin-left: 5px;
          width: 28px;
          height: 28px;
          cursor: pointer;
        }
      }

      .address,
      .phone,
      .open-time {
        display: flex;
        align-items: center;
        padding: 4px 0 20px;

        img {
          margin-right: 5px;
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }

        span {
          color: $text-gray;
          letter-spacing: 0.05em;
        }

        a[type="button"] {
          padding: 2px 15px;
          margin-left: 10px;
          font-size: 14px;
          text-decoration: none;
          color: $text-gray;
          background: transparent;
          border: 0.5px solid $text-gray;
          border-radius: 20px;
          transition: 0.5s;
          letter-spacing: 0.05em;

          &:hover {
            color: #fff;
            background: $main-green;
            border-color: $main-green;
          }
        }
      }

      .open-time {
        img {
          align-self: flex-start;
        }

        span {
          line-height: 2;
          letter-spacing: 0.1em;
        }
      }
    }

    .main-info-pic {
      padding-left: 10px;
      width: 55%;
      min-height: 300px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 5px;
      box-shadow: 0 0 5px 3px rgb(111, 137, 128);
      transform: translateY(-15%);

      @include pad {
        padding-left: 0;
        width: 100%;
        box-shadow: none;
        transform: translateY(0);
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
  }

  .description {
    padding: 50px 200px;
    background: #fafafa;

    @include pad {
      padding: 50px 20px;
    }

    @include phone {
      padding: 0 5% 50px;
    }

    h3 {
      display: flex;
      align-items: center;
      font-size: 28px;
      text-align: center;
      color: $text-gray;
      letter-spacing: 0.08em;
      line-height: 2.5;

      &::before,
      &::after {
        display: inline-block;
        width: 1em;
        height: 2px;
        background: #e7e7e7;
        content: "";
        flex-grow: 1;
      }

      &::before {
        margin-right: 15px;
      }

      &::after {
        margin-left: 15px;
      }
    }

    p {
      font-size: 16px;
      text-indent: 2em;
      color: $text-gray;
      letter-spacing: 0.05em;
      line-height: 1.7;
    }
  }

  .about {
    display: flex;
    padding: 50px 200px;

    @include pad {
      flex-wrap: wrap;
      padding: 50px 20px;
    }

    .service,
    .traffic,
    .remark,
    .organizer,
    .participation,
    .website {
      display: flex;
      padding: 0 16px;
      width: 33%;
      flex-direction: column;

      @include pad {
        padding: 16px 0;
        width: 100%;
        text-align: center;
      }

      h4 {
        font-size: 18px;
        color: $text-gray;
        letter-spacing: 0.05em;
      }

      p {
        padding: 16px 0;

        span {
          font-size: 14px;
          color: $text-gray;
          letter-spacing: 0.05em;
          line-height: 1.5;
        }
      }
    }

    .website {
      a[type="button"] {
        padding: 2px 15px;
        margin-left: 10px;
        font-size: 14px;
        text-decoration: none;
        color: $text-gray;
        background: transparent;
        border: 0.5px solid $text-gray;
        border-radius: 20px;
        transition: 0.5s;
        letter-spacing: 0.05em;

        &:hover {
          color: #fff;
          background: $main-green;
          border-color: $main-green;
        }
      }
    }
  }
}
</style>
