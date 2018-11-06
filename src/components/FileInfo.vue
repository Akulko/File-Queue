<template lang="pug">
  .file-info
    .header
      .name {{file.name}}
      .type {{file.raw.type}}
      .size {{file.size | bytesToSize}}
    .content 
      el-progress(:percentage="progress")
    .footer
      p SHA256: {{checkSum || 'Calculating...'}}
</template>

<script>
import {bytesToSize} from '../helpers/bytesToSize.js'
export default {
  props: {
    file: Object,
    checkSum: String,
    progress: Number
  },
  filters: {
    bytesToSize
  }
};
</script>

<style scoped lang="stylus">
.file-info
  border-bottom 1px solid #b0c3f9
  padding 10px 0
  width 100%
.header
  display flex
  justify-content space-between
  padding-bottom 10px
</style>
