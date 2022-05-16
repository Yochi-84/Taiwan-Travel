<template>
  <div class="enjoy">
    <div class="enjoy-text">
      <h2>Enjoy</h2>
      <small>享受在地獨特風味</small>
      <p>
        充斥在台灣大街小巷的在地美食，融合當地生活與文化特色，發展出各式各樣風味，從銅板小吃到精緻料理，數不清的美味讓你飽餐一頓。
      </p>
      <div class="more-food">
        <span>享受更多美味</span>
        <img src="@/assets/icon/arrow.svg" alt="" />
      </div>
    </div>
    <div class="enjoy-pic">
      <div class="enjoy-pic-item" v-for="item of food" :key="item.title" :style="{ backgroundImage: 'url(' + item.url +')'}">
        <div class="enjoy-pic-item-text">
          <h4>{{ item.title }}</h4>
          <p>{{ item.describe }}</p>
        </div>
      </div>
      <div class="enjoy-pic-item" v-for="item of food" :key="item.title" :style="{ backgroundImage: 'url(' + item.url +')'}">
        <div class="enjoy-pic-item-text">
          <h4>{{ item.title }}</h4>
          <p>{{ item.describe }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const getImg = (name) => require(`@/assets/pic/${name}.png`)
    const food = ref([
      {
        title: '祥發海產餐廳',
        url: getImg('Enjoy1'),
        describe:
          '位面對東石舊漁港，堤防外有一長排竹蚵屋，是每日青蚵嫂集體剖蚵的好所在，所以在祥發用餐，不但可以品嚐美味，還可以欣賞當地人文風景及剝蚵的光景。'
      },
      {
        title: '石碇一粒粽',
        url: getImg('Enjoy2'),
        describe:
          '粽子主打不油膩、吃了不脹氣，且選用最優質的材料，其中又以桂花粽最為特別，將整朵桂花加入粽子做調味，品嘗粽子的同時也能嚐到桂花香。'
      },
      {
        title: '鄭記香腸',
        url: getImg('Enjoy3'),
        describe:
          '位於小琉球的老街上，最古早的鄭記琉球香腸老店創立於民國43年，已成為小琉球當地的名產之一。'
      },
      {
        title: '兩支北方麵食館',
        url: getImg('Enjoy4'),
        describe:
          '專營北方麵食點心，從各式蒸餃、牛肉麵、酸辣麵等風味佳餚，堅持道地美味的執著，從醒麵、桿皮、包餡到成品，每一個環節都是對客戶的尊重與責任。'
      },
      {
        title: '阿妃健康廚房',
        url: getImg('Enjoy5'),
        describe:
          '每顆水餃從肉餡、使用豐富的蔬菜、調味料的比例、水餃皮的手感與功夫，層層步驟讓水餃能兼具口感與高纖維，也讓營養價值更高。'
      },
      {
        title: '鶴岡紅茶舖',
        url: getImg('Enjoy6'),
        describe:
          '店內販售花蓮瑞穗有機生態農場所種植的有機茶，坐下品嚐一杯香甜回甘的好茶，可以讓人暫時放掉煩惱，享受純淨的片刻。'
      },
      {
        title: '三家村陽春麵',
        url: getImg('Enjoy7'),
        describe:
          '餐點上桌前，將佐料瑤舀進碗內，再加入一大早熬製的大骨高湯，最後放進麵條，保持麵體彈性口感不軟爛。'
      }
    ])
    return {
      food
    }
  }
}
</script>

<style scoped lang="scss">
.enjoy {
  padding: 100px 0;
  color: $text-gray;

  @include pad {
    padding: 60px 0;
  }

  &-text {
    display: grid;
    padding: 0 20vw 40px;
    margin-bottom: 24px;
    grid-template-columns: 1fr minmax(50%, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "title describe"
      "sub_title more";

    @include pad {
      grid-template-columns: 1fr;
      grid-template-rows: 65px 70px repeat(2, 1fr);
      grid-template-areas:
        "title"
        "sub_title"
        "describe"
        " more";
      padding: 0 50px;
    }

    h2 {
      grid-area: title;
      font-size: 48px;
      font-family: $en-font;
      color: $main-green;

      @include pad {
        font-size: 24px;
        align-self: center;
      }
    }

    small {
      grid-area: sub_title;
      font-size: 48px;
      white-space: nowrap;

      @include pad {
        font-size: 24px;
        align-self: center;
      }
    }

    p {
      grid-area: describe;
      font-size: 18px;
      letter-spacing: 0.15em;
      line-height: 26px;

      @include pad {
        font-size: 13px;
        letter-spacing: 0.05em;
        line-height: 19px;
      }
    }

    .more-food {
      margin-top: 24px;
      font-weight: 500;
      color: $main-green;
      grid-area: more;
      box-sizing: border-box;
      letter-spacing: 0.05em;
      cursor: pointer;
      justify-self: end;

      @include pad {
        justify-self: start;
      }

      span {
        margin-right: 5px;
      }
    }
  }

  &-pic {
    white-space: nowrap;
    animation: scroll-gallery 21s linear infinite;

    &:hover {
      animation-play-state: paused;
    }

    @keyframes scroll-gallery {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(calc(-140% - 70px));
      }
    }

    @include pad {
      @keyframes scroll-gallery {
        from {
          transform: translateX(0);
        }

        to {
          transform: translateX(calc(-175% - 70px));
        }
      }
    }

    &-item {
      position: relative;
      display: inline-block;
      margin: 5px;
      width: 20%;
      min-height: 400px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 5px;
      cursor: pointer;

      @include pad {
        width: 25%;
        min-height: 250px;
      }

      &:hover {
        .enjoy-pic-item-text {
          opacity: 1;
        }
      }

      &-text {
        @include flex-center;

        position: absolute;
        top: 0;
        bottom: 0;
        padding: 0 10px;
        white-space: normal;
        color: #fff;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        border-radius: 5px;
        opacity: 0;
        transition: 1s;
        flex-direction: column;
        letter-spacing: 0.15em;

        h4 {
          padding-bottom: 8px;
          font-size: 18px;
        }

        p {
          font-size: 14px;
          align-self: flex-start;
        }

        @include pad {
          display: none;
        }
      }
    }
  }
}
</style>
