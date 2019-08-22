<template>
  <div class="hello">
    HelloWorldpage
  </div>
</template>

<script>
import * as API from '@/utils/api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
      // this.testApi();
  },
  methods:{
    testApi() {
        API.getAllDoneNumber()
        .then()
        .catch();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
