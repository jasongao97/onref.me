<template>
  <div id="app">
    <transition appear name="head">
      <HeadView/>
    </transition>
    <transition appear name="router" mode="out-in">
      <router-view/>
    </transition>
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
    margin: 30px;
  }
}

@media (min-width: 768px) { 
  #app {
    margin: 60px;
  }
}

.head-enter-active, .head-leave-active {
  transition: opacity .5s;
}
.head-enter, .head-leave-to, .router-enter, .router-leave-to{
  opacity: 0;
}
.router-enter-active, .router-leave-active {
  transition: opacity .5s ease .2s;
}

#app {
  font-family: 'Open Sans', sans-serif;
  color: #333;
}

h1, h2 {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
