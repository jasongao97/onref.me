<template>
  <div class="top">
    <div class="header">
      <div class="headerTitle">
        <router-link to="/" @click.native="hideNavigationBar"><h1 class="title">On Reflection</h1></router-link>
        <h2 class="subTitle">A project made by 
          <span>{{ msg }}</span>
        </h2>
      </div>

      <div class="buttonBars hidden-sm-and-up" @click="showNavigationBar">
        <icon name="bars"></icon>
      </div>
    </div>
    <!-- 桌面端屏幕导航栏 -->
    <div class="navigationBar hidden-xs-only">
      <router-link to="/documentary"><h2 class="navigation">Documentary</h2></router-link>
      <router-link to="/information"><h2 class="navigation">Information</h2></router-link>
      <router-link to="/about"><h2 class="navigation">About</h2></router-link>
    </div>
    <!-- 移动端屏幕导航栏 -->
    <transition name="nav">
      <div v-show="ifShowNav" class="navigationBar hidden-sm-and-up">
        <router-link to="/documentary" @click.native="hideNavigationBar"><h2 class="navigation">Documentary</h2></router-link>
        <router-link to="/information" @click.native="hideNavigationBar"><h2 class="navigation">Information</h2></router-link>
        <router-link to="/about" @click.native="hideNavigationBar"><h2 class="navigation">About</h2></router-link>
      </div>
    </transition>
  </div>
</template>

<script>
// import { generateGradient } from '../assets/gradient.js'

export default {
  name: 'HeadView',
  data () {
    return {
      msg: 'Cornography',
      ifShowNav: false
    }
  },
  methods: {
    showNavigationBar: function () {
      this.ifShowNav = !this.ifShowNav
    },
    hideNavigationBar: function () {
      this.ifShowNav = false
    }
  }
}
</script>

<style scoped>
/* 不同宽度显示不同 */
@media (max-width: 768px) { 
  .title {
    font-size: 24pt;
  }
  .subTitle {
    display: none;
  }
}

@media (min-width: 768px) { 
  .top {
    position: fixed;
  }
  .title {
    font-size: 34pt;
  }
  .subTitle {
    font-size: 14pt;
  }
}
/* 动画过渡 */
.nav-enter-active {
  transition: opacity .2s;
}

.nav-leave-active {
  transition: opacity .1s;
}

.nav-enter, .nav-leave-to {
  opacity: 0;
}

.top {
  z-index: 0;
  width: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.title {
  margin-bottom: 6px;
  font-weight: normal;
}

.subTitle {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  line-height: 32px;
}

.subTitle span {
  text-decoration: underline;
}

.buttonBars {
  padding: 8px;
}

.navigationBar {
  margin-top: 14pt;
}

.navigation {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 38px;
}

</style>
