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
          <li class="tabs-title is-active"><a href="#panel1" aria-selected="true">Active</a></li>
          <li class="tabs-title"><router-link :to="{ name: 'queue', params: { id: 'Registration Emails', status: 'waiting' }}">Waiting</router-link></li>
          <li class="tabs-title"><a href="#panel3">Completed</a></li>
          <li class="tabs-title"><a href="#panel4">Cancelled</a></li>
          <li class="tabs-title"><a href="#panel5">Failed</a></li>
          <li class="tabs-title"><a href="#panel6">Terminated</a></li>
        </ul>
      </div>

      <div class="medium-9 columns">
        <div class="tabs-content vertical" data-tabs-content="deeplinked-tabs">
          <div class="tabs-panel" id="panel1">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="line-height: 36px;">Job name 1</span>
                <el-button style="float: right;" type="danger">Cancel</el-button>
              </div>
              <div v-for="o in 4" class="text item">
                {{'List item ' + o }}
              </div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="line-height: 36px;">Job name 2</span>
                <el-button style="float: right;" type="danger">Cancel</el-button>
              </div>
              <div v-for="o in 4" class="text item">
                {{'List item ' + o }}
              </div>
            </el-card>
          </div>
          <div class="tabs-panel" id="panel2">
            <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
              porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
              Suspendisse dictum feugiat nisl ut dapibus.</p>
          </div>
          <div class="tabs-panel" id="panel3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>
          </div>
          <div class="tabs-panel" id="panel4">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>
          </div>
          <div class="tabs-panel" id="panel5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>
          </div>
          <div class="tabs-panel" id="panel6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Vue from 'vue'
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
//    created () {
//      // fetch the data when the view is created and the data is
//      // already being observed
//      this.fetchData()
//    },
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
