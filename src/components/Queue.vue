<template>
  <div>
    <div class="row collapse">
      <h1>Queue {{ $route.params.id }}</h1>
    </div>
    <div class="row collapse">

      <div class="medium-3 columns">

        <!--<h2>Status {{ $route.params.status || 'All' }}</h2>-->
        <!--<p>{{data}}</p>-->
        <ul class="tabs vertical" data-tabs id="deeplinked-tabs">
          <!--<li class="tabs-title is-active"><a href="/#/queues/Registration Emails/active" aria-selected="true">Active</a></li>-->
          <!--<li class="tabs-title"><a href="/#/queues/Registration Emails/waiting">Waiting</a></li>-->
          <li class="tabs-title is-active"><a href="#waiting" aria-selected="true">Waiting</a></li>
          <!--<li class="tabs-title"><router-link :to="{ name: 'queue', params: { id: 'Registration Emails', status: 'waiting' }}">Waiting</router-link></li>-->
          <li class="tabs-title"><a href="#active">Active</a></li>
          <li class="tabs-title"><a href="#completed">Completed</a></li>
          <li class="tabs-title"><a href="#cancelled">Cancelled</a></li>
          <li class="tabs-title"><a href="#failed">Failed</a></li>
          <li class="tabs-title"><a href="#Terminated">Terminated</a></li>
        </ul>
      </div>

      <div class="medium-9 columns">
        <div class="tabs-content vertical" data-tabs-content="deeplinked-tabs">
          <div class="tabs-panel" id="waiting">
            <job-detail></job-detail>
          </div>
          <div class="tabs-panel" id="active">
            <job-detail></job-detail>
          </div>
          <div class="tabs-panel" id="completed">
            <job-detail></job-detail>
          </div>
          <div class="tabs-panel" id="cancelled">
            <job-detail></job-detail>
          </div>
          <div class="tabs-panel" id="failed">
            <job-detail></job-detail>
          </div>
          <div class="tabs-panel" id="Terminated">
            <job-detail></job-detail>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Vue from 'vue'
  import JobDetail from './JobDetail.vue'
  // import $ from 'jquery'

  const queue = {
    mixins: [
      // eslint-disable-next-line
      require('../mixins/foundation')
    ],
    data () {
      return {
        data: {}
      }
    },
    watch: {
      // call again the method if the route changes
      '$route': 'changeTab'
    },
    methods: {
      changeTab () {
        // console.log(this.$route.params.status)
        // $('#deeplinked-tabs').foundation('selectTab', '??') TODO change urls activate tabs
      }
    },
    created () {
      const statuses = this.$route.params.status ? [this.$route.params.status] : ['waiting,complete']
      Vue.http.get(`http://server-queue.com/queues/${this.$route.params.id}?status=${statuses.join(',')}`).then(response => {
        this.data = response.body
      }).catch(response => {
        console.error(response)
      })
    },
    components: {
      JobDetail
    }
  }

  export default queue
</script>

<style lang="scss" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
