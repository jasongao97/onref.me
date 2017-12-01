<template>
  <div class="hello">
    <h1 class="title">On Reflection</h1>
    <h2 class="subTitle" @click="changeMsg">A project made by {{ msg }}</h2>
    <canvas id="gradientBlock" width="320" height="320"></canvas>
    <ul>
      <li><a href="https://www.instagram.com/gosgjkaj_official/" target="_blank">@gosgjkaj_offical</a></li>
      <li><a href="https://www.instagram.com/jasongao97/" target="_blank">@jasongao97</a></li>
    </ul>
  </div>
</template>

<script>
import { generateGradient } from '../assets/gradient.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Cornography'
    }
  },
  methods: {
    changeMsg: function () {
      console.log('changed')
    }
  },
  mounted: function () {
    generateGradient()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 46px;
}
.subTitle {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 300;
}
canvas {
  margin-top: 30px;
  background-color: #333;
}
ul {
  margin-top: 30px;
  padding: 0;
  list-style: none;
}
li {
  margin-bottom: 10px;
}
a {
  color: #888;
  font-size: 16px;
}
</style>
