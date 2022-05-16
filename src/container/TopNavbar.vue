<template>
  <div class="navbar">
    <div class="nav-block">
      <div class="nav-menu-btn">
        <ul
          class="menu-btn"
          :class="{ isOpen: menuOpen }"
          @click="menuOpen = !menuOpen"
        >
          <li class="btn-line"></li>
          <div class="side-menu" @click.stop="">
            <div class="input-bar">
              <img class="search-icon" src="@/assets/icon/search.svg" />
              <input
                class="search-input"
                type="text"
                placeholder="想去哪裡？"
                v-model.trim="wannaGo"
                @keydown.enter.exact="searchView"
              />
            </div>
            <div class="side-nav">
              <ul class="side-nav-list">
                <li
                  v-for="item of navItem"
                  :key="item.title"
                  class="side-nav-item"
                  @click="goPath(item.en); menuOpen = !menuOpen"
                >
                  <span>{{ item.title }}</span>
                  <span>{{ item.en.toUpperCase() }}</span>
                </li>
              </ul>
            </div>
            <div class="other-list">
              <div class="other-list-item" @click="goPath('/search'); menuOpen = !menuOpen">
                <img src="@/assets/nav_icon/heart/outline.svg" alt="我的收藏" />
                <span>喜好清單</span>
              </div>
              <div class="other-list-item" @click="goPath('/search'); menuOpen = !menuOpen">
                <img src="@/assets/nav_icon/faq/outline.svg" alt="常見問題" />
                <span>常見問答</span>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <h1 id="logo" @click="router.push('/')">Logo</h1>
      <ul class="nav-list">
        <li
          class="nav-item"
          :class="{ isHover: index === hoverIndex }"
          v-for="(item, index) of navItem"
          :key="item.title"
          @mouseover="hoverIndex = index"
          @mouseleave="hoverIndex = null"
          @click="goPath(item.en)"
        >
          <span>{{ item.title }}</span>
          <span>{{ item.en.toUpperCase() }}</span>
          <div class="sub-nav" v-if="hoverIndex !== null">
            <ul class="sub-nav-list">
              <li
                v-for="(nav_item, index) of navItem[hoverIndex].sub_nav"
                :key="nav_item.title"
                class="sub-nav-item"
                @click.stop="goNavPath(item.en, index)"
              >
                <img :src="nav_item.icon" alt="" />
                <span>{{ nav_item.title }}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="nav-btn">
        <img src="@/assets/nav_icon/heart/outline.svg" alt="我的收藏" title="我的收藏" />
        <img src="@/assets/nav_icon/faq/outline.svg" alt="常見問題" title="常見問題" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '@/router'
export default {
  emit: ['refresh'],
  setup (props, { emit }) {
    const getImg = (name) => require(`@/assets/nav_icon/${name}.svg`)

    const hoverIndex = ref(null)
    const menuOpen = ref(false)
    const navItem = ref([
      {
        title: '找景點',
        en: 'Attractions',
        sub_nav: [
          {
            title: '北台灣',
            icon: getImg('north')
          },
          {
            title: '中台灣',
            icon: getImg('central')
          },
          {
            title: '南台灣',
            icon: getImg('south')
          },
          {
            title: '東台灣',
            icon: getImg('east')
          },
          {
            title: '離島地區',
            icon: getImg('outlying')
          }
        ]
      },
      {
        title: '找美食',
        en: 'Delicacy',
        sub_nav: [
          {
            title: '飽餐一頓',
            icon: getImg('meal')
          },
          {
            title: '清涼消暑',
            icon: getImg('drink')
          },
          {
            title: '在地美味',
            icon: getImg('snack')
          },
          {
            title: '特色名產',
            icon: getImg('souvenir')
          }
        ]
      },
      {
        title: '找活動',
        en: 'Activity',
        sub_nav: [
          {
            title: '藝文展演',
            icon: getImg('show')
          },
          {
            title: '戶外露營',
            icon: getImg('camping')
          },
          {
            title: '親近山海',
            icon: getImg('outdoor')
          },
          {
            title: '年度慶典',
            icon: getImg('celebration')
          }
        ]
      },
      {
        title: '探索更多',
        en: 'More',
        sub_nav: [
          {
            title: '親子同遊',
            icon: getImg('family')
          },
          {
            title: '溫泉之旅',
            icon: getImg('spa')
          },
          {
            title: '花花世界',
            icon: getImg('flower')
          },
          {
            title: '文化歷史',
            icon: getImg('culture')
          }
        ]
      }
    ])
    const wannaGo = ref('')

    function goPath (k) {
      const kind = k
      emit('refresh')
      router.push({ name: 'search', params: { kind } })
    }

    function goNavPath (k, i) {
      const kind = k
      const index = i
      emit('refresh')
      router.push({ name: 'search', params: { kind, index } })
    }
    return {
      router,
      hoverIndex,
      menuOpen,
      navItem,
      wannaGo,

      goPath,
      goNavPath
    }
  }
}
</script>

<style lang="scss">
.navbar {
  position: relative;
  z-index: 3;
  height: 98.85px;
  background: $white-bg;
  border: 1px solid #fafafa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @include pad {
    position: sticky;
    top: 0;
    height: 60px;
  }

  .nav-block {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 min(80px, 3.5%);
    height: 100%;

    @include pad {
      justify-content: space-between;
      padding: 0;

      &::after {
        content: "";
        display: block;
        width: 60px;
      }
    }

    #logo {
      overflow: hidden;
      width: 108px;
      height: 64px;
      text-indent: 101%;
      white-space: nowrap;
      background-repeat: no-repeat;
      background-image: url("@/assets/nav_icon/logo.svg");
      cursor: pointer;

      @include pad {
        height: 60px;
        transform: scale(0.8);
      }
    }

    .nav-list {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 39%;
      height: 100%;

      @include pad {
        display: none;
      }

      .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 6%;
        height: 100%;
        font-size: 1rem;
        font-weight: 400;
        color: $text-gray;
        font-style: normal;
        line-height: 23px;
        flex-direction: column;
        flex: none;
        cursor: pointer;

        a {
          text-decoration: none;
        }

        &:hover .sub-nav {
          display: flex;
        }

        .sub-nav {
          position: absolute;
          bottom: 0;
          left: 50%;
          z-index: 5;
          display: none;
          justify-content: center;
          align-items: center;
          padding: 0 40px;
          height: 154.21px;
          background: $white-bg;
          transform: translate(-50%, 100%);
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          backdrop-filter: blur(4px);

          .sub-nav-list {
            display: flex;
            justify-content: center;
            align-items: center;

            .sub-nav-item {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0 36px;
              flex-direction: column;
              cursor: pointer;

              span {
                font-family: $cht-font;
              }

              &:not(:last-child)::after {
                content: "";
                border-right: 1px solid rgba(172, 172, 172, 1);
                position: absolute;
                right: 0;
                height: 100%;
              }

              &:hover {
                img {
                  filter: $svg-filter;
                }
              }
            }
          }
        }

        @include pad {
          margin: 0 15px;
        }

        &.isHover {
          span:first-child::before {
            position: absolute;
            top: -16px;
            left: calc(50% - 5px);
            width: 10px;
            height: 10px;
            background: $point-yellow;
            border-radius: 50%;
            content: "";
          }
        }

        & > span {
          &:first-of-type {
            position: relative;
            font-family: $cht-font;
          }

          &:last-of-type {
            font-family: $en-font;
          }
        }
      }
    }

    .nav-btn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      height: 64px;

      @include pad {
        display: none;
      }

      img {
        cursor: pointer;

        &:first-child {
          position: static;
          top: 8px;
          left: 8px;
          width: 30px;
          height: 30px;
        }

        &:last-child {
          position: static;
          top: 8px;
          left: 46px;
          width: 30px;
          height: 30px;
        }

        &:hover {
          filter: $svg-filter;
        }
      }
    }

    .nav-menu-btn {
      display: none;
      margin-left: 16px;

      .menu-btn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        box-sizing: border-box;
        flex-direction: column;

        .btn-line {
          position: relative;
          width: 22px;
          height: 2px;
          background: $main-green;
          transition: 0.5s;

          &::before,
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background: $main-green;
            transition: 0.5s;
          }

          &::before {
            top: -8px;
          }

          &::after {
            bottom: -8px;
          }
        }

        &.isOpen {
          .btn-line {
            transform: translateX(4px);

            &::before {
              transform: translateX(-8px);
            }

            &::after {
              transform: translateX(-8px);
            }
          }

          .side-menu {
            transform: translateX(0);
          }
        }

        .side-menu {
          position: absolute;
          top: 52px;
          bottom: 0;
          left: -16px;
          display: flex;
          padding: 20px;
          width: 300px;
          height: 200vh;
          background: $white-bg;
          transition: 0.5s;
          transform: translateX(-100%);
          box-sizing: border-box;
          flex-direction: column;

          .input-bar {
            display: flex;
            align-items: center;
            padding-right: 20px;
            background: $white-bg;
            border: none;
            border-radius: 5px;
            box-shadow: inset 0 0 2px #000;
            transition: 0.5s;

            .search-icon {
              vertical-align: middle;
              padding: 10px;
              flex-grow: 0;
            }

            .search-input {
              padding: 10px 20px 10px 0;
              background: transparent;
              border: none;
              flex-grow: 1;

              &:focus {
                outline: none;
              }
            }
          }

          .side-nav-item {
            padding: 16px;

            span {
              font-size: 14px;
              font-weight: 400;
              color: $text-gray;

              &:first-of-type {
                margin-right: 8px;
                font-family: $cht-font;
              }

              &:last-of-type {
                font-family: $en-font;
              }
            }

            &:last-child {
              position: relative;
            }

            &:last-child::after {
              position: absolute;
              bottom: -3px;
              left: 0;
              width: 100%;
              content: "";
              border-bottom: 1px solid $light-gray;
            }
          }

          .other-list-item {
            padding: 16px;

            img {
              vertical-align: middle;
              margin-right: 8px;
            }

            span {
              font-family: $cht-font;
              color: $main-green;
              vertical-align: middle;
            }
          }
        }
      }

      @include pad {
        display: block;
      }
    }
  }
}
</style>
