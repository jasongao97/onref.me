<template>
  <div class="container">
    <h1 class="title">About</h1>

  </div>
</template>

<script>

export default {
  name: 'About',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 767px) { 
  .container {
    margin-top: 30px;
  }
  .title {
    text-align: center;
  }
}

@media (min-width: 768px) { 
  .container {
    margin-top: 10px;
    margin-left: 340px;
  }
  .title {
    text-align: left;
  }
}

.title {
  font-size: 20pt;
  font-weight: 700;
}

p {
  text-align: justify;
  line-height: 22pt;
}

</style>
