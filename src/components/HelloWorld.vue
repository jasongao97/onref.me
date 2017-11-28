<template>
  <div class="hello">
    <h1>On Reflection</h1>
    <h2 @click="changeMsg">A project made by {{ msg }}</h2>
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
h1 {
  font-size: 46px;
  line-height: 20px;
}
h2 {
  font-size: 20px;
  font-weight: 300;
  font-family: 'Roboto'
}
canvas {
  margin-top: 20px;
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
  font-family: 'Roboto';
  color: #888;
  font-size: 16px;
}
.hello {
  width: 320px;
  display: flex;
  flex-direction: column;
}
</style>
