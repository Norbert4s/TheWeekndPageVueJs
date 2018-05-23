<template>
  <div class="home">
    <HomeNavigation/>
    <HomeLanding/>
    <HomeAlbums/>
    <HomeHistory/>
    <HomeFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomeNavigation from '@/components/HomeNavigation.vue'
import HomeLanding from '@/components/HomeLanding.vue'
import HomeAlbums from '@/components/HomeAlbums.vue'
import HomeHistory from '@/components/HomeHistory.vue'
import HomeFooter from '@/components/HomeFooter.vue'

export default {
  name: 'home',
  components: {
    HelloWorld, HomeNavigation, HomeLanding, HomeAlbums, HomeHistory, HomeFooter
  }
}
</script>

<style lang="scss">

</style>
