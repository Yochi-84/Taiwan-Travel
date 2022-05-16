<template>
  <div class="home">
    <MainBanner></MainBanner>
    <ExploreArea></ExploreArea>
    <ParticipateArea></ParticipateArea>
    <EnjoyArea></EnjoyArea>
    <SubscribeArea></SubscribeArea>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from '@/container/MainBanner.vue'
import ExploreArea from '@/components/Home/ExploreArea.vue'
import ParticipateArea from '@/components/Home/ParticipateArea.vue'
import EnjoyArea from '@/components/Home/EnjoyArea.vue'
import SubscribeArea from '@/components/Home/SubscribeArea.vue'
export default {
  name: 'HomeView',
  components: {
    MainBanner,
    ExploreArea,
    ParticipateArea,
    EnjoyArea,
    SubscribeArea
  }
}
</script>

<style lang="scss">
  .home{
    overflow: hidden;
  }
</style>
