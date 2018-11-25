<template>
  <div class="Welcome">
    <h1>{{ msg }}</h1>
    <br/><br/>
    <h2>
      <router-link to="/WordLadder">
      Get Start
      </router-link>
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
  }
}
</script>

<style>
  a {color: #30d48b;}
</style>
