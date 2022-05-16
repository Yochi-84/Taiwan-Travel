<template>
  <div class="search-bar">
    <img class="search-icon" src="@/assets/icon/search.svg" />
    <input
      class="search-input"
      type="text"
      placeholder="想去哪裡？"
      v-model.trim="wannaGo"
      @keydown.enter.exact="searchSpot"
    />
    <button class="search-btn" @click="searchSpot">Go</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '@/router'
export default {
  setup () {
    const wannaGo = ref('')

    function searchSpot () {
      const keyword = wannaGo.value
      router.push({ name: 'search', params: { kind: 'Attractions', keyword } })
    }

    return {
      // data
      wannaGo,

      // methods
      searchSpot
    }
  }
}
</script>

<style scoped lang="scss">
.search-bar {
  position: absolute;
  bottom: 30%;
  left: 50%;
  display: flex;
  align-items: center;
  padding-right: 20px;
  width: 40%;
  min-width: 280px;
  background: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  transition: 0.5s;
  transform: translateX(-50%);

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @include pad {
    display: none;
  }

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

  .search-btn {
    padding: 5px 20px;
    color: $main-green;
    background: transparent;
    border: 0.5px solid $main-green;
    border-radius: 50px;
    flex-grow: 0;
    cursor: pointer;

    &:hover {
      color: $hover-yellow;
      border-color: $hover-yellow;
    }

    @include pad {
      display: none;
    }
  }
}
</style>
