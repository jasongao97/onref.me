<template>
  <div class="hello">
    <!-- <canvas id="gradientBlock" width="320" height="320"></canvas> -->
    <div class="imagesBlock hidden-xs-only" id="wrapper">
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
