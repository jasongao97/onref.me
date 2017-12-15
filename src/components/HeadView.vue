<template>
  <div class="header">
    <div class="headerTitle">
      <h1 class="title">On Reflection</h1>
      <h2 class="subTitle">A project made by 
        <span>{{ msg }}</span>
      </h2>
      <div class="navigationBar hidden-xs-only">
        <h2 class="navigation">Photography</h2>
        <h2 class="navigation">Documentary</h2>
        <h2 class="navigation">Information</h2>
        <h2 class="navigation">About</h2>
      </div>
    </div>

    <div class="headerMore hidden-sm-and-up">
      <img class="moreButton" :src="moreButtonUrl"/>
    </div>
  </div>
</template>

<script>
// import { generateGradient } from '../assets/gradient.js'
import moreButton from './../assets/button_more.png'

export default {
  name: 'HeadView',
  data () {
    return {
      msg: 'Cornography',
      moreButtonUrl: moreButton
    }
  },
  methods: {
  }
}
</script>

<style scoped>
/* 不同宽度显示不同 */
@media (min-width: 768px) { 
  .header {
    position: fixed;
  }
}

.header {
  width: auto;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.moreButton {
  width: 32px;
  height: 32px;
}

h1, h2 {
  margin: 0;
  padding: 0;
}

.title {
  font-size: 28pt;
  margin-bottom: 6px;
  font-weight: normal;
}

.subTitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 12pt;
  font-weight: 300;
  line-height: 32px;
}

.subTitle span {
  text-decoration: underline;
}

.navigationBar {
  margin-top: 14pt;
}

.navigation {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  line-height: 38px;
}

a {
  color: #555;
}

</style>
