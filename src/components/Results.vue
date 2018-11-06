<template lang="pug">
  .results
   .empty(v-if="files.length === 0") There your encryption progress will be displayed. 
   file-info(
    v-else,
    v-for="{file, progress, checkSum}, index in files", 
    :file="file", 
    :progress="progress", 
    :checkSum="checkSum", 
    :key="index")
   
</template>

<script>
import FileInfo from './FileInfo';
import {mapState} from 'vuex';

export default {
  components: {
    FileInfo
  },
  computed: {
    ...mapState(['files'])
  }
};
</script>

<style scoped lang="stylus">
.results
  border 1px solid #b0c3f9
  padding 30px
  box-sizing border-box
  border-radius 3px
  background #e7eeff
  width 45%
  display flex
  align-items center
  justify-content center
  flex-direction column
</style>
