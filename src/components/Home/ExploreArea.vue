<template>
  <div class="explore">
    <div class="explore-text">
      <h2>Explore</h2>
      <small>探索台灣每個角落</small>
      <p>
        台灣擁有高山峽谷及四面環海地理特性，因此充滿各種自然景致等待人們發現，而各縣市有其特色文化與在地必嚐美食，無論想要來場山林陶冶身心之旅，抑或體驗歷史人文深度旅行，都能在台灣這片土地上踏尋。
      </p>
    </div>
    <div class="explore-list">
      <ul>
        <li
          v-for="(item, index) of area"
          :key="item.title"
          @click="currentArea = index"
        >
          {{ item.title }}
        </li>
      </ul>
      <div class="more-view">
        <span>探索更多景色</span>
        <img src="@/assets/icon/arrow.svg" alt="" />
      </div>
    </div>
    <div
      v-for="(item, index) of area[currentArea].place"
      :key="item.title"
      class="explore-place-item"
      :style="{ gridArea: 'pic' + (index + 1) }"
    >
      <div
        class="explore-place-pic"
        :style="{ backgroundImage: 'url(' + item.url + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const getImg = (name) => require(`@/assets/pic/${name}.png`)
    const currentArea = ref(0)
    const area = ref([
      {
        title: '都市文情:北台灣',
        place: [
          {
            title: '台東金剛大道',
            url: getImg('Explore-1')
          },
          {
            title: '南投日月潭文武廟',
            url: getImg('Explore-2')
          },
          {
            title: '寧夏觀光夜市',
            url: getImg('Explore-3')
          },
          {
            title: '南投合歡山',
            url: getImg('Explore-4')
          },
          {
            title: '北投圖書館',
            url: getImg('Explore-5')
          },
          {
            title: '樹林三角埔頂山步道',
            url: getImg('Explore-6')
          }
        ]
      },
      {
        title: '休閒樂活:中台灣',
        place: [
          {
            title: '台東金剛大道',
            url: getImg('Explore-1')
          },
          {
            title: '南投日月潭文武廟',
            url: getImg('Explore-2')
          },
          {
            title: '寧夏觀光夜市',
            url: getImg('Explore-3')
          },
          {
            title: '南投合歡山',
            url: getImg('Explore-4')
          },
          {
            title: '北投圖書館',
            url: getImg('Explore-5')
          },
          {
            title: '樹林三角埔頂山步道',
            url: getImg('Explore-6')
          }
        ]
      },
      {
        title: '人情小吃:南台灣',
        place: [
          {
            title: '台東金剛大道',
            url: getImg('Explore-1')
          },
          {
            title: '南投日月潭文武廟',
            url: getImg('Explore-2')
          },
          {
            title: '寧夏觀光夜市',
            url: getImg('Explore-3')
          },
          {
            title: '南投合歡山',
            url: getImg('Explore-4')
          },
          {
            title: '北投圖書館',
            url: getImg('Explore-5')
          },
          {
            title: '樹林三角埔頂山步道',
            url: getImg('Explore-6')
          }
        ]
      },
      {
        title: '自然生態:東台灣',
        place: [
          {
            title: '台東金剛大道',
            url: getImg('Explore-1')
          },
          {
            title: '南投日月潭文武廟',
            url: getImg('Explore-2')
          },
          {
            title: '寧夏觀光夜市',
            url: getImg('Explore-3')
          },
          {
            title: '南投合歡山',
            url: getImg('Explore-4')
          },
          {
            title: '北投圖書館',
            url: getImg('Explore-5')
          },
          {
            title: '樹林三角埔頂山步道',
            url: getImg('Explore-6')
          }
        ]
      },
      {
        title: '小島風情:離島地區',
        place: [
          {
            title: '台東金剛大道',
            url: getImg('Explore-1')
          },
          {
            title: '南投日月潭文武廟',
            url: getImg('Explore-2')
          },
          {
            title: '寧夏觀光夜市',
            url: getImg('Explore-3')
          },
          {
            title: '南投合歡山',
            url: getImg('Explore-4')
          },
          {
            title: '北投圖書館',
            url: getImg('Explore-5')
          },
          {
            title: '樹林三角埔頂山步道',
            url: getImg('Explore-6')
          }
        ]
      }
    ])
    return {
      // data
      currentArea,
      area
    }
  }
}
</script>

<style scoped lang="scss">
.explore {
  position: relative;
  display: grid;
  align-items: center;
  padding: 100px 0 100px 13%;
  color: $text-gray;
  grid-template-columns: 270px 1fr repeat(3, minmax(80px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "text text text pic1 pic2"
    "list pic3 pic4 pic5 pic6";
  gap: 2vmin 1vmin;

  @include pad {
    padding: 60px 50px;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
      "text  text pic1"
      "list . pic1";
  }

  @include phone {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "text"
      "list";
  }

  &-text {
    grid-area: text;
    min-width: 200px;

    @include pad {
      margin: 16px 0;
    }

    h2 {
      font-size: 48px;
      font-family: $en-font;
      color: $main-green;
      line-height: 65px;

      @include pad {
        font-size: 24px;
        font-weight: 600;
      }
    }

    small {
      font-size: 48px;
      line-height: 70px;
      white-space: nowrap;

      @include pad {
        font-size: 24px;
        font-weight: 600;
      }
    }

    p {
      margin: 16px 0 0;
      width: 90%;
      font-size: 18px;
      letter-spacing: 0.15em;
      line-height: 26px;

      @include pad {
        font-size: 13px;
        letter-spacing: 0.05em;
        line-height: 19px;
      }

      @include phone {
        margin: 0;
        width: auto;
      }
    }
  }

  &-list {
    grid-area: list;
    width: 203px;
    align-self: center;

    ul {
      li {
        position: relative;
        padding: 16px;
        letter-spacing: 0.15em;
        cursor: pointer;
        box-shadow: 0 0.5px 0 #ebebeb;

        &::before {
          position: absolute;
          top: 50%;
          left: -8px;
          width: 8px;
          height: 8px;
          background: $point-yellow;
          border-radius: 50%;
          content: "";
          transform: translateY(-50%);
        }

        &:hover {
          color: $main-green;
        }
      }

      @include pad {
        display: none;
      }
    }

    .more-view {
      display: none;
      font-weight: 500;
      color: $main-green;
      box-sizing: border-box;
      letter-spacing: 0.05em;
      cursor: pointer;

      span {
        margin-right: 5px;
      }

      @include pad {
        display: block;
      }
    }

    @include pad {
      align-self: start;
    }
  }

  &-place-item {
    width: 100%;
    height: 100%;
    min-height: 24vh;
    border-radius: 5px;

    &:hover {
      .explore-place-text {
        opacity: 1;
      }
    }

    .explore-place-pic {
      position: relative;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      transition: 1s;
      cursor: pointer;

      &:hover {
        filter: blur(2px);

        @include pad {
          filter: none;
        }
      }
    }
  }

  & div:nth-of-type(3),
  & div:nth-of-type(4) {
    transform: translateX(-20%);
    align-self: end;
  }

  & div:nth-of-type(n + 3) {
    @include phone {
      display: none;
    }
  }

  & div:nth-of-type(n + 4) {
    @include pad {
      display: none;
    }
  }
}
</style>
