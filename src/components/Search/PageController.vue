<template>
  <ul>
    <li class="last-page-controller" @click="currentPage !== 1 ? changePage(currentPage - 1) :  currentPage" :class="{ disable: currentPage === 1 }"><i class="fa-solid fa-angle-left"></i></li>
    <li class="number_page_controller" v-for="number of props.totalPage" :key="number" :class="{ isActive: number === currentPage }" @click="changePage(number)" v-show="props.totalPage <= 6">{{ number}}</li>

    <!-- 如果總頁數超過6頁 -->
    <li v-show="props.totalPage > 6 && currentPage > 2 " @click="changePage(1)" :class="{ isActive: currentPage === 1 }">1</li>
    <li v-show="props.totalPage > 6 && currentPage - 1 > 2" >...</li>
    <li v-show="props.totalPage > 6  && Math.abs(currentPage - number) <= 1" v-for="number of props.totalPage" :key="number"  @click="changePage(number)" :class="{ isActive: number === currentPage }">{{ number}}</li>
    <li v-show="props.totalPage > 6 && props.totalPage - currentPage > 2" >...</li>
    <li v-show="props.totalPage > 6 && currentPage < props.totalPage - 1" @click="changePage(props.totalPage)" :class="{ isActive: currentPage === props.totalPage }">{{ props.totalPage }}</li>
    <!-- 結束 -->

    <li class="next-page-controller" @click="currentPage !== props.totalPage ?  changePage(currentPage + 1) :  currentPage" :class="{ disable: currentPage === props.totalPage }"><i class="fa-solid fa-angle-right" ></i></li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  props: {
    totalPage: {
      type: Number,
      default: 1
    }
  },
  emits: [
    'changePage'
  ],
  setup (props) {
    const store = useStore()
    const currentPage = computed(() => store.state.currentPage)
    // TODO:上一頁下一頁有歷史紀錄
    function changePage (number) {
      store.commit('changePage', number)
      store.dispatch('scrollToTop')
    }
    return {
      props,
      currentPage,
      changePage
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: flex-end;
  width: 100%;

  li {
    padding: 8px 13px;
    font-size: 14px;
    color: $text-gray;
    border: 0.5px solid $text-gray;
    border-left: none;
    cursor: default;
    user-select: none;

    &.isActive {
      color: #fff;
      background: $main-green;
    }

    &.disable {
      cursor: not-allowed;
    }

    &:not(.isActive):not(.disable) {
      cursor: pointer;

      &:hover {
        background: $medium-green;
      }
    }
  }

  .last-page-controller {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-left: 0.5px solid $text-gray;
  }

  .next-page-controller {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>
