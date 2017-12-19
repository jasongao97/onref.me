<template>
  <div class="container">
    <div class="imagesBox" v-for="image in images" :key="image.id">
      <img :src="image.src + 
      '?imageView2/1/w/800/h/800/q/75|imageslim'"/>
    </div>
  </div>
</template>

<script>
// import { generateGradient } from '../assets/gradient.js'

export default {
  name: 'Photography',
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
  .container {
    margin-top: 10px;
    margin-left: 340px;
  }
}

img {
  width: 100%;
  vertical-align: bottom
}

.imagesBox {
  margin-bottom: 40px;
  padding: 0;
}

</style>
