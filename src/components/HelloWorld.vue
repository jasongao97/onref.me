<template>
  <div class="hello">
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
  .hello {
    margin-top: 40px;
  }
}

@media (min-width: 768px) { 
  .hello {
    margin-left: 300px;
  }
}

img {
  margin-bottom: 40px;
  width: 100%;
  height: 100%;
}

.imagesBlock {
  display: flex;
  flex-direction: column;
}

</style>
