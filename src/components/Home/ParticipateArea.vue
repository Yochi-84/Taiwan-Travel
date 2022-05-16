<template>
  <div class="participate">
    <div class="participate-text">
      <h2>Participate</h2>
      <small>體驗當地風情人文</small>
      <p>
        台灣擁有豐富文俗風情，因地貌多變延伸出豐富的主題活動，邀請你體驗文化的精彩。
      </p>
    </div>
    <div class="participate-list">
      <ul>
        <li v-for="(item, index) of activity" :key="item.title">
          <a href="#" @click.prevent="currentActivity = index">{{
            item.title
          }}</a>
        </li>
      </ul>
    </div>
    <div
      class="participate-pic"
      :style="{ backgroundImage: 'url(' + activity[currentActivity].url + ')' }"
    ></div>
    <div class="participate-mobile-activity">
      <div
        class="participate-mobile-pic"
        v-for="item of activity"
        :key="item.title"
      >
        <img :src="item.url" alt="" />
        <div class="participate-mobile-text">
          <p>{{ item.title }}</p>
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
    const currentActivity = ref(0)
    const activity = ref([
      {
        title: '一年一度精采盛事',
        url: getImg('Participate1')
      },
      {
        title: '追逐自由單車旅程',
        url: getImg('Participate2')
      },
      {
        title: '親自踏上山海之旅',
        url: getImg('Participate3')
      },
      {
        title: '體驗台灣文化慶典',
        url: getImg('Participate4')
      }
    ])

    return {
      activity,
      currentActivity
    }
  }
}
</script>

<style lang="scss">
.participate {
  display: grid;
  align-items: center;
  padding: 100px 20% 100px 0;
  color: $text-gray;
  background: #fafafa;
  grid-template-columns: 5fr 3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "pic text"
    "pic list";

  @include pad {
    display: block;
    padding: 60px 50px;
  }

  &-text {
    grid-area: text;
    align-self: start;
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

      @include pad {
        font-size: 24px;
        font-weight: 600;
      }
    }

    p {
      font-size: 18px;
      letter-spacing: 0.15em;
      line-height: 26px;

      @include pad {
        font-size: 13px;
        letter-spacing: 0.05em;
        line-height: 19px;
      }
    }
  }

  &-list {
    grid-area: list;
    align-self: end;
    width: 100%;

    @include pad {
      display: none;
    }

    li {
      position: relative;
      padding: 8px;
      transition: 0.5s;
      cursor: pointer;

      a {
        position: relative;
        font-weight: 500;
        text-decoration: none;
        color: $main-green;
        line-height: 23px;
        letter-spacing: 0.05em;
      }

      & a::before {
        position: absolute;
        top: 50%;
        right: -16px;
        display: none;
        width: 8px;
        height: 8px;
        background: $point-yellow;
        border-radius: 50%;
        content: "";
        transform: translateY(-50%);
      }

      &:not(:last-child)::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        content: "";
        border-bottom: 0.5px solid $main-green;
      }

      &:hover a::before {
        display: block;
      }
    }
  }

  &-pic {
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    grid-area: pic;
    transform: translateX(-50px);

    @include pad {
      display: none;
    }
  }

  &-mobile-activity {
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;

    @include pad {
      display: flex;
    }

    .participate-mobile-pic {
      position: relative;
      overflow: hidden;
      margin-bottom: 10px;
      width: 49%;
      border-radius: 5px;
      box-sizing: border-box;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }

      .participate-mobile-text {
        @include flex-center;

        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background:
          linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
          );
        border-radius: 5px;

        p {
          color: #fff;
          line-height: 23px;
          letter-spacing: 0.15em;
        }

        @include phone {
          display: none;
        }
      }
    }
  }
}
</style>
