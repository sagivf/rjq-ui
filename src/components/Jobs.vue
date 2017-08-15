<template>
  <div>
    <div class="block">
      <span class="demonstration">Created</span>
      <el-date-picker
        v-model="createdFilter"
        type="datetimerange"
        :picker-options="pickerOptions"
        placeholder="Select time range"
        align="right">
      </el-date-picker>
    </div>
    <div class="row">
      <el-card class="box-card" v-for="job in _list" :key="job.id">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">{{job.id}}</span>
          <span style="line-height: 36px;" v-if="job.name"> - {{job.name}}</span>
          <!--<el-button style="float: right; margin-left: 10px" type="danger">Cancel</el-button>-->
        </div>
        <div>
          <ul>
            <li>Status: {{job.status}}</li>
            <li>Created: {{job.dateCreated}}</li>
            <li>Date Enable: {{job.dateEnable}}</li>
          </ul>
          <ul>
            <li>Retry Count: {{job.retryCount}}</li>
            <li>Retry Max: {{job.retryMax}}</li>
          </ul>
          <ul>
            <li>Date Started: {{job.dateStarted}}</li>
            <li>Date Finished: {{job.dateFinished}}</li>
          </ul>
          <div v-if="job.repeat">
            <h4>Repeat Job</h4>
            Delay: {{job.repeatDelay}}
          </div>
          <div v-if="job.custom">
            <h4>Custom Data</h4>
            <ul>
              <li v-for="(value, key) in job.custom">{{key}}: {{value}}</li>
            </ul>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    mixins: [require('../mixins/foundation')],
    props: ['list'],
    computed: {
      _list () {
        return (this.list || []).map(item => {
          delete item.log

          const job = {
            id: item.id,
            name: item.name,
            dateCreated: moment(item.dateCreated).format('MMMM Do YYYY, h:mm:ss a'),
            dateEnable: moment(item.dateEnable).format('MMMM Do YYYY, h:mm:ss a'),
            repeat: item.repeat,
            repeatDelay: moment.duration(item.repeatDelay / 1000, 'seconds').humanize(),
            retryDelay: moment.duration(item.retryDelay / 1000, 'seconds').humanize(),
            dateFinished: moment(item.dateFinished).format('MMMM Do YYYY, h:mm:ss a'),
            dateStarted: moment(item.dateStarted).format('MMMM Do YYYY, h:mm:ss a'),
            priority: item.priority,
            processCount: item.processCount,
            progress: item.progress,
            status: item.status,
            queueId: item.queueId,
            retryCount: item.retryCount,
            retryMax: item.retryMax,
            timeout: item.timeout
          }

          Object.keys(item).forEach(key => {
            if (job[key] == null) {
              job.custom = job.custom || {}
              job.custom[key] = item[key]
            }
          })

          return job
        })
      }
    },
    created () {
    },
    data () {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Last week',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: 'Last month',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: 'Last 3 months',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        createdFilter: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
      }
    }
  }
</script>

<style lang="scss" scoped>

  .box-card {
    margin-bottom: 20px;
    margin-right: 20px;

    h4 {
      text-align: center;
      text-decoration: underline;
    }
  }
</style>
