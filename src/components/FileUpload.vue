<template lang="pug">
  .wrap
    el-upload.upload-demo(
    drag
    action="#"
    :auto-upload="false"
    :on-change="onChange"
    :on-remove="onRemove"
    multiple)
      i.el-icon-upload
      .el-upload__text Drop file (or multiple) 
        em to compute SHA256 checksums
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {PUSH_FILE, REMOVE_FILE} from '../store/mutations-types'
import {getCheckSum} from '../helpers/getCheckSum.js'
export default {
  data() {
    return {
      fileList: [],
    };
  },
  computed: {
    ...mapState(['files'])
  },
  methods: {
    ...mapMutations({
      pushFile: PUSH_FILE,
      removeFile: REMOVE_FILE
    }),
    onRemove(file){
      this.removeFile(file)
    },
    async onChange(file) {
      if (this.files.find(i => i.file.raw.uid === file.raw.uid)) {
        return;
      } 

      const view = {file, progress: 0, checkSum: ''};
      this.pushFile(view)

      try {
        const [currentElement] = this.files.slice(-1)
        view.checkSum = await getCheckSum(view.file.raw, progress => {
          currentElement.progress = progress
          });
      } catch (err) {
        throw err;
      }
    },

  }
};
</script>

<style scoped lang="stylus">
.wrap
  width 30%
  background #e7eeff
  border: 1px solid #b0c3f9
  border-radius 3px
  display flex
  align-items center
  justify-content center
  padding 40px 0
.el-upload-list__item
  height 50px
</style>
