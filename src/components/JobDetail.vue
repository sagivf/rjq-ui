<template>
  <div class="row">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">Job name 1</span>
        <el-button style="float: right;" type="danger">Cancel</el-button>
      </div>
      <div v-for="o in 4" class="text item">
        {{'List item ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    mixins: [
      // eslint-disable-next-line
      require('../mixins/foundation'),
    ],
    name: 'tooltip',
    data () {
      return {
        msg: 'Tooltip'
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
