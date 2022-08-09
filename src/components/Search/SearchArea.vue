<template>
    <div class="input-area">
        <BreadArea></BreadArea>
        <div class="search-bar">
            <span>你目前正在搜索</span>
            <div class="input-bar">
                <input type="text" placeholder="輸入關鍵字" v-model="keyword">
                <div class="county-box county-box-controller" :class="{ isOpen: boxOpen}">
                  <div class="county-selected-list county-box-controller" :class="{ isOpen: boxOpen}" @click="boxOpen = !boxOpen">
                    <p v-if="countySelected.length === 0" class="county-box-controller">選擇縣市</p>
                    <ul class="county-box-controller" v-else>
                      <li class="county-box-controller" v-for="city of countySelected" :key="city.cityName">{{ city.cityName }}</li>
                    </ul>
                  </div>
                  <div class="county-list county-box-controller" v-if="boxOpen">
                    <ul>
                      <li v-for="city of county" :key="city.cityName" class="county-box-controller" :class="{ isSelected: city.selected === true}" @click="city.selected = !city.selected">{{  city.cityName }}</li>
                    </ul>
                  </div>
                </div>
                <button @click="searchView"><i class="fa-solid fa-search"></i> 搜尋</button>
            </div>
            <div class="phone-search-bar">
              <input
                class="search-input"
                type="text"
                placeholder="想去哪裡？"
                v-model.trim="keyword"
                @keydown.enter.exact="searchView"
              />
              <img class="search-icon" src="@/assets/icon/search.svg" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import BreadArea from '@/components/BreadArea.vue'
export default {
  components: {
    BreadArea
  },
  emits: ['keyword'],
  setup (props, context) {
    const store = useStore()
    const county = ref([])
    const boxOpen = ref(false)
    const keyword = ref('')

    const countySelected = computed(() =>
      county.value.filter(item => item.selected)
    )

    function searchView () {
      context.emit('keyword', keyword.value)
    }

    onMounted(() => {
      document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('county-box-controller')) {
          boxOpen.value = false
        }
      })
    })

    onMounted(() => {
      store.dispatch('CountyApi').then(() => {
        county.value = store.state.cityCounty.map(function (item) {
          const obj = {}
          obj.cityName = item.CityName
          obj.selected = false
          console.log(obj)
          return obj
        })
      })
    })

    return {
      county,
      boxOpen,
      keyword,
      countySelected,

      searchView
    }
  }
}
</script>

<style scoped lang="scss">
.input-area {
  padding: 50px 100px 30px;

  @include pad {
    padding: 50px 50px 30px;
  }

  @include phone {
    padding: 50px 5% 30px;
  }

  .search-bar {
    display: flex;
    align-items: center;

    @include pad {
      flex-wrap: wrap;
    }

    & > span {
      padding: 5px 30px  5px 10px;
      font-size: 28px;
      font-weight: 700;
      white-space: nowrap;
      color: $text-gray;
      letter-spacing: 0.08em;

      @include pad {
        width: 100%;
      }
    }

    .input-bar {
      display: flex;
      justify-content: space-around;
      flex-grow: 1;
      gap: 16px;
      box-sizing: border-box;

      @include pad {
        display: none;
      }

      input {
        padding: 13px 16px;
        width: 43%;
        border: 0.5px solid $text-gray;
        border-radius: 5px;

        &:focus {
          outline-color: $main-green;
        }
      }

      .county-box {
        position: relative;
        width: 43%;
        border: 0.5px solid $text-gray;
        border-radius: 5px;
        box-sizing: border-box;
        cursor: pointer;

        &.isOpen {
          border-bottom: none;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        .county-selected-list {
          position: relative;
          padding-right: 30px;
          height: 100%;

          ul {
            overflow: hidden;
            padding-left: 16px;
            height: 100%;
            white-space: nowrap;

            li {
              position: relative;
              top: 50%;
              display: inline-block;
              padding: 5px;
              margin-right: 5px;
              font-size: 14px;
              color: $main-green;
              background: $light-green;
              border-radius: 5px;
              transform: translateY(-50%);
            }
          }

          & > p {
            padding: 13px 0 13px 16px;
            font-size: 13.5px;
            color: #757575;
            letter-spacing: 0.05em;
          }

          &.isOpen {
            &::after {
              transform: translateY(-50%) rotate(180deg);
            }
          }

          &::after {
            position: absolute;
            top: 50%;
            right: 10px;
            display: inline-block;
            font-size: 16px;
            color: #757575;
            transition: 0.5s;
            content: "\f107";
            font: var(--fa-font-solid);
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            transform: translateY(-50%);
          }
        }

        .county-list {
          position: absolute;
          bottom: 0;
          left: -1px;
          z-index: 3;
          overflow-y: auto;
          width: calc(100% + 2.2px);
          max-height: 400px;
          background: #fff;
          border: 0.5px solid $text-gray;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          transform: translateY(100%);
          box-sizing: border-box;

          &::-webkit-scrollbar {
            width: 6px;
            background-color: $main-green;
          }

          &::-webkit-scrollbar-track {
            background-color: #d4d4d4;
            border-radius: 10px;
            box-shadow: inset 0 0 6px $medium-green;
          }

          &::-webkit-scrollbar-thumb {
            background-color: $main-green;
            border-radius: 10px;
            box-shadow: inset 0 0 6px $medium-green;
          }

          li {
            position: relative;
            padding: 5px 16px;
            cursor: pointer;

            &:hover {
              background: $light-green;
            }

            &.isSelected {
              background: $light-green;

              &::after {
                position: absolute;
                top: 50%;
                right: 10px;
                display: inline-block;
                color: $main-green;
                content: "\f00c";
                font: var(--fa-font-solid);
                text-rendering: auto;
                -webkit-font-smoothing: antialiased;
                transform: translateY(-50%);
              }
            }
          }
        }
      }

      button {
        padding: 13.5px 17.5px;
        font-weight: 700;
        color: #fff;
        background: $medium-green;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        flex: none;
      }
    }

    .phone-search-bar {
      display: none;
      margin-left: 10px;
      width: 100%;
      border: 0.5px solid $text-gray;
      border-radius: 5px;

      @include pad {
        display: flex;
      }

      .search-input {
        padding: 10px;
        background: transparent;
        border: none;
        flex-grow: 1;

        &:focus {
          outline: none;
        }
      }

      .search-icon {
        background: transparent;
        border: none;
      }
    }
  }
}

</style>
