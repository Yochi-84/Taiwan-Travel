<template>
  <div class="banner">
    <div
      class="banner-pic"
      :style="{ backgroundImage: 'url(' + item.url + ')' }"
      :class="{ isShow: bannerIndex === index }"
      v-for="(item, index) of pic"
      :key="item.url"
    ></div>
    <div class="banner-text">
      <p>遠離日常喧囂<br />讓旅行豐富你的生活</p>
    </div>
    <SearchInput></SearchInput>
    <div class="banner-controller">
      <div
        class="controller-item"
        :class="{ isActive: bannerIndex === index }"
        v-for="(item, index) of pic"
        :key="item.url"
        @click="bannerChange(index)"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchInput from '@/components/Home/SearchInput.vue'
export default {
  name: 'MainBanner',
  components: {
    SearchInput
  },
  setup () {
    const getImg = (name) => require(`@/assets/banner/${name}.png`)

    const pic = ref([
      {
        title: '',
        url: getImg('banner-1')
      },
      {
        title: '',
        url: getImg('banner-2')
      },
      {
        title: '',
        url: getImg('banner-3')
      },
      {
        title: '',
        url: getImg('banner-4')
      },
      {
        title: '',
        url: getImg('banner-5')
      }
    ])
    const bannerIndex = ref(0)
    const interval = setInterval(() => {
      bannerIndex.value = (bannerIndex.value + 1) % pic.value.length
    }, 8000)

    function bannerChange (index) {
      bannerIndex.value = index
    }
    return {
      // data
      pic,
      bannerIndex,
      interval,

      // methods
      bannerChange
    }
  }
}
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  padding-bottom: 52.65%;
  width: 100%;

  @include pad {
    padding-bottom: 110%;
  }

  .banner-pic {
    position: absolute;
    padding-bottom: 52.65%;
    width: 100%;
    max-height: 800px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0;
    transition: opacity 3s;

    @include pad {
      padding-bottom: 110%;
    }

    &.isShow {
      opacity: 1;
    }
  }

  .banner-text {
    position: absolute;
    bottom: 43%;
    left: 50%;
    transform: translateX(-50%);

    @include pad {
      display: none;
    }

    p {
      font-size: 6vmin;
      font-family: "Noto Sans TC", sans-serif;
      font-weight: 500;
      white-space: nowrap;
      color: #fff;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
      letter-spacing: 0.15em;
      line-height: 1.5;
    }
  }

  .banner-controller {
    position: absolute;
    bottom: 4%;
    left: 50%;
    display: flex;
    justify-content: space-around;
    transform: translateX(-50%);

    .controller-item {
      margin: 10px;
      width: 8px;
      height: 8px;
      background: #fff;
      border-radius: 50%;
      opacity: 0.5;
      cursor: pointer;

      &.isActive {
        transform: scale(1.5);
        opacity: 1;
      }
    }
  }
}
</style>
