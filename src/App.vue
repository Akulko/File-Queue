<template lang="pug">
  #app
    file-upload
    results
</template>

<script>
import FileUpload from './components/FileUpload.vue'
import Results from './components/Results.vue'

export default {
  name: 'app',
  components: {
    FileUpload,
    Results
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
}
</style>
