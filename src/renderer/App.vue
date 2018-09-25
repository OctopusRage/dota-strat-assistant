<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script src="bootstrap/dist/js/bootstrap.min.js"></script>
<script>
  export default {
    name: 'dota-strat-assistant'
  }
</script>


<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  .main-container {
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }
</style>


