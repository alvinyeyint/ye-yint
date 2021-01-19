<template>
  <div id="app mt-0">
    <MainPage/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainPage from './components/index.vue'

export default {
  name: 'App',
  title: 'Ye Yint',
  components: {
    MainPage
  }
}
</script>
<style lang="sass">
@import '~/src/assets/style/index.sass'
</style>
<style lang="css">

#app {
  font-family: 'Yusei Magic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
