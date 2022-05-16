<template>
  <div class="loading-view" v-show="loadingStatus">
    <i class="fa-solid fa-spinner fa-spin-pulse"></i>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup () {
    const store = useStore()
    const loadingStatus = computed(() => store.state.loadingStatus)
    return {
      loadingStatus
    }
  }
}
</script>

<style scoped lang="scss">
.loading-view {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: $main-green;
  background: rgba(90, 90, 90, 0.3);

  @include flex-center;

  svg {
    width: 100px;
    height: 100px;
  }
}
</style>
