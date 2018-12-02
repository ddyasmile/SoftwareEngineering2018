<template>
  <div class="Welcome">
    <h1>{{ msg }}</h1>
    <br/><br/>
    <h2>
      <button v-on:click="getStart" class="button">Get Start</button>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to ddyasmile\'s Vue.js App'
    }
  },
  methods: {
    getStart: function () {
      this.$router.push({name: 'WordLadder', params: { Start: 'code', End: 'data' }})
    }
  }
}
</script>
