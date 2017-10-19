<template>
  <div id="app">
    <router-link to="/">Go to home</router-link>
    <router-link to="/about">Go to about</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
}
</script>
<style lang="scss">
</style>
