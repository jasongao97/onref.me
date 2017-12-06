<template>
  <div id="app">
    <h1 class="title">On Reflection</h1>
    <h2 class="subTitle">A project made by
      <span v-if="!ifShowInfo" @click="changeMsg">{{ msg }}</span>
      <span v-else>
        <a href="https://www.instagram.com/gosgjkaj_official/" target="_blank">@gosgjkaj_offical</a>
        <a href="https://www.instagram.com/jasongao97/" target="_blank">@jasongao97</a>
      </span>
    </h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Cornography',
      ifShowInfo: false
    }
  },
  methods: {
    changeMsg: function () {
      this.ifShowInfo = true
    }
  }
}
</script>

<style>
@import "./assets/display.css";

#app {
  font-family: 'roboto condensed', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-content: left;
  color: #2c3e50;
  margin: 40px;
}

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

a {
  color: #2c3e50;
}
</style>
