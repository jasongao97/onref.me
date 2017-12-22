<template>
  <div class="container">
    <div class="singleImageShow hidden-xs-only" v-show="ifShowSingleImage">
      <img :src="singleImageSrc + '?imageView2/1/w/1200/h/1200/q/75|imageslim'" @click="hideSingleImage"/>
    </div>
    <div class="imagesBox" v-for="image in images" :key="image.id" @click="showSingleImage">
      <img :src="image.src + 
      '?imageView2/1/w/800/h/800/q/75|imageslim'" :id="image.id"/>
    </div>
  </div>
</template>

<script>
// import { generateGradient } from '../assets/gradient.js'

export default {
  name: 'Photography',
  data () {
    return {
      ifShowSingleImage: false,
      singleImageSrc: '',
      images: [
        {id: 0, src: 'http://pic.ustb.wang/onref/1.JPG'},
        {id: 1, src: 'http://pic.ustb.wang/onref/2.JPG'},
        {id: 2, src: 'http://pic.ustb.wang/onref/3.JPG'},
        {id: 3, src: 'http://pic.ustb.wang/onref/4.JPG'}
      ]
    }
  },
  methods: {
    showSingleImage: function (event) {
      this.singleImageSrc = this.images[event.target.id].src
      this.ifShowSingleImage = true
    },
    hideSingleImage: function (event) {
      this.ifShowSingleImage = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 767px) { 
  .container {
    margin-top: 30px;
  }
}

@media (min-width: 768px) { 
  .imagesBox {
    margin-top: 10px;
    margin-left: 340px;
  }
}

img {
  width: 100%;
  vertical-align: bottom
}

.singleImageShow {
  position: fixed;
  left: 50%; top: 50%;
  margin-left: -500px;
  margin-top: -350px;
  width: 900px;
  height: 600px;
  padding: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  /* 测试style */
  border: 2px solid red;
}

.singleImageShow img {
  height: 600px;
  width: 600px;
}

.imagesBox {
  margin-bottom: 40px;
  padding: 0;
}

</style>
