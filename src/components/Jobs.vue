<template>
  <div class="row">
    <el-card class="box-card" v-for="job in list" :key="job.id">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">{{job.name}} - {{job.id}}</span>
        <el-button style="float: right;" type="danger">Cancel</el-button>
      </div>
      <div>
        <ul>
          <li>{{job.v}}</li>
          <li>Priority: {{job.priority}}</li>
          <li>Process Count: {{job.processCount}}</li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    mixins: [require('../mixins/foundation')],
    props: ['list'],
    created (list) {
      list.forEach(item => {
        item.v = 'vvv';
      });
    }
  }
</script>

<style lang="scss" scoped>
  .box-card {
    margin-bottom: 20px;
  }
</style>
