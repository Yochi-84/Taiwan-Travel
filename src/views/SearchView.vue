<template>
    <SearchArea v-on:keyword="getKeyword"></SearchArea>
    <ShowView :keyword="keyword"></ShowView>
    <LoadingMask></LoadingMask>
</template>

<script>
import SearchArea from '@/components/Search/SearchArea.vue'
import ShowView from '@/components/Search/ShowView.vue'
import LoadingMask from '@/components/LoadingMask.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'SearchView',
  components: {
    SearchArea,
    ShowView,
    LoadingMask
  },
  setup () {
    const store = useStore()

    const keyword = ref('')
    const loadingStatus = computed(() => store.state.loadingStatus)

    function getKeyword (k) {
      keyword.value = k
    }

    return {
      keyword,
      loadingStatus,
      getKeyword
    }
  }
}
</script>
