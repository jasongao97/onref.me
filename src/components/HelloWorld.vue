<template>
  <div class="hello">
    <h1 class="title">On Reflection</h1>
    <h2 class="subTitle">A project made by
      <span v-if="!ifShowInfo" @click="changeMsg">{{ msg }}</span>
      <span v-else>
        <a href="https://www.instagram.com/gosgjkaj_official/" target="_blank">@gosgjkaj_offical</a>
        &
        <a href="https://www.instagram.com/jasongao97/" target="_blank">@jasongao97</a>
      </span>
    </h2>
    <!-- <canvas id="gradientBlock" width="320" height="320"></canvas> -->
    <div class="imagesBlock" id="wrapper">
      <img v-for="image in images" :key="image.id" :src="image.src + 
    '?imageView2/1/w/600/h/600/q/75|imageslim'"/>
    </div>
  </div>
</template>

<script>
// import { generateGradient } from '../assets/gradient.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Cornography',
      ifShowInfo: false,
      images: [
        {id: 1, src: 'http://pic.ustb.wang/onref/1.JPG'},
        {id: 2, src: 'http://pic.ustb.wang/onref/2.JPG'},
        {id: 3, src: 'http://pic.ustb.wang/onref/3.JPG'},
        {id: 4, src: 'http://pic.ustb.wang/onref/4.JPG'}
      ]
    }
  },
  methods: {
    changeMsg: function () {
      this.ifShowInfo = true
    }
  },
  mounted: function () {
    // generateGradient()
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
  font-family: 'roboto';
  margin-top: 10px;
  font-size: 18px;
  font-weight: 300;
  line-height: 32px;
}

.subTitle span {
  text-decoration: underline;
}

canvas {
  margin-top: 20px;
  background-color: #333;
}

a {
  color: #2c3e50;
}

img {
  margin-top: 40px;
  margin-right: 40px;
  width: 100%;
  height: 100%;
}

.imagesBlock {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}
</style>
