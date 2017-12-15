<template>
  <div id="app">
    <HeadView/>
    <router-view/>
  </div>
</template>

<script>
import HeadView from './components/HeadView'

export default {
  name: 'app',
  components: {
    HeadView
  },
  mounted: function () {
    console.log('hello!')
  }
}
</script>

<style>
@import "./assets/display.css";

@media (max-width: 767px) { 
  #app {
    margin: 40px;
  }
}

@media (min-width: 768px) { 
  #app {
    margin: 60px;
  }
}

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  color: #333;
}
</style>
