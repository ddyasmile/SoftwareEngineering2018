<template>
  <div class="WordLadder">
    <h1>{{intruction}}</h1>
    <h2>{{notes1}}{{notes2}}</h2>
    <br/>
    <form class="form">
      Start: <input type="text" name="Start" v-bind:value="startWord">
      End: <input type="text" name="End" v-bind:value="endWord">
      <br/><br/><br/>
      <button>Come on</button>
    </form>
    <br/><br/>
    <h3>Output: {{Ladder}}</h3>
  </div>
</template>

<script>
export default {
  name: 'WordLadder',
  data () {
    return {
      intruction: 'This App will give a word ladder of given two words. But now, there is nothing.',
      notes1: 'If Start is \'code\' and End is \'data\',',
      notes2: 'you will get \'code->cade->cate->date->data\'.',
      startWord: 'code',
      endWord: 'data',
      Ladder: 'code->cade->cate->date->data'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
