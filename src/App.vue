<template>
  <TopNavbar v-on:refresh="routerRefresh"></TopNavbar>
  <router-view v-if="routerAlive"></router-view>
  <BottomFooter></BottomFooter>
</template>

<script>
import TopNavbar from '@/container/TopNavbar.vue'
import BottomFooter from '@/components/BottomFooter.vue'
import { ref } from 'vue'
export default {
  components: {
    TopNavbar,
    BottomFooter
  },
  setup () {
    const routerAlive = ref(true)
    function routerRefresh () {
      routerAlive.value = false
      setTimeout(() => { routerAlive.value = true }, 4)
    }
    return {
      routerAlive,

      routerRefresh
    }
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-family: "Noto Sans TC", sans-serif;
  list-style: none;
}
</style>
