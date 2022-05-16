<template>
    <div class="bread">
        <ul>
            <li><router-link to="/">首頁</router-link></li>
            <li v-if="currentRoute === 'search'"><router-link to="/search">搜尋結果</router-link></li>
            <li v-if="currentRoute === 'info'"><router-link to="/search">{{ infoKind }}</router-link></li>
            <li v-if="currentRoute === 'info'"><a href="#">{{ props.spot }}</a></li>
        </ul>
    </div>
</template>
<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
  props: {
    kind: {
      type: String
    },
    spot: {
      type: String
    }
  },
  setup (props) {
    const route = useRoute()
    const currentRoute = computed(() => route.name)
    const infoKind = computed(() => {
      let result = ''
      switch (props.kind) {
        case 'ScenicSpot':
          result = '景點'
          break
        case 'Restaurant':
          result = '美食'
          break
        case 'Activity':
          result = '活動'
          break
      }
      return result
    })
    return {
      props,
      infoKind,
      currentRoute
    }
  }
}
</script>

<style scoped lang="scss">
.bread {
  li {
    position: relative;
    display: inline-block;
    padding: 0 10px;

    a {
      font-size: 14px;
      text-decoration: none;
      color: $light-gray;

      &:hover {
        color: $main-green;
      }
    }
  }

  & li + li::before {
    content: "/";
    position: absolute;
    line-height: 21.49px;
    top: 0;
    left: 0;
    height: 100%;
    color: $light-gray;
  }
}
</style>
