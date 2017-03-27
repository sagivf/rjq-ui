<template>
  <div>
    <div class="row collapse">
      <h1>Queue {{ $route.params.id }}</h1>
    </div>
    <div class="row collapse">

      <div class="medium-3 columns">

        <h2>Status {{ $route.params.status || 'All' }}</h2>
        <ul class="tabs vertical">
          <li class="tabs-title tabs-title-all">
            <router-link :to="{ name: 'queue', params: { id: $route.params.id }}">
              All
            </router-link>
          </li>
          <li class="tabs-title tabs-title-active">
            <router-link :to="{ name: 'queue', params: { id: $route.params.id, status: 'active' }}">
              Active
            </router-link>
          </li>
          <li class="tabs-title tabs-title-waiting">
            <router-link :to="{ name: 'queue', params: { id: $route.params.id, status: 'waiting' }}">
              Waiting
            </router-link>
          </li>
          <li class="tabs-title tabs-title-completed">
            <router-link :to="{ name: 'queue', params: { id: $route.params.id, status: 'completed' }}">
              Completed
            </router-link>
          </li>
          <li class="tabs-title tabs-title-cancelled">
            <router-link :to="{ name: 'queue', params: { id: $route.params.id, status: 'cancelled' }}">
              Cancelled
            </router-link>
          </li>
          <li class="tabs-title tabs-title-failed">
            <router-link :to="{ name: 'queue', params: { id: $route.params.id, status: 'failed' }}">
              Failed
            </router-link>
          </li>
          <li class="tabs-title tabs-title-terminated">
            <router-link :to="{ name: 'queue', params: { id: $route.params.id, status: 'terminated' }}">
              Terminated
            </router-link>
          </li>
        </ul>
      </div>

      <div class="medium-9 columns">
        <div class="tabs-content vertical">
          <div class="tabs-panel" id="all">
            <job-detail v-bind:jobs="all"></job-detail>
          </div>
          <div class="tabs-panel" id="active">
            <job-detail v-bind:jobs="active"></job-detail>
          </div>
          <div class="tabs-panel" id="waiting">
            <job-detail v-bind:jobs="waiting"></job-detail>
          </div>
          <div class="tabs-panel" id="completed">
            <job-detail v-bind:jobs="completed"></job-detail>
          </div>
          <div class="tabs-panel" id="cancelled">
            <job-detail v-bind:jobs="cancelled"></job-detail>
          </div>
          <div class="tabs-panel" id="failed">
            <job-detail v-bind:jobs="failed"></job-detail>
          </div>
          <div class="tabs-panel" id="terminated">
            <job-detail v-bind:jobs="terminated"></job-detail>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Vue from 'vue'
  import JobDetail from './JobDetail.vue'
  import $ from 'jquery'

  const statuses = ['waiting', 'active', 'completed']
  function createStatuses (jobs) {
    statuses.forEach(status => {
      this[status] = jobs.filter(job => job.status === status)
    })
  }

  const queue = {
    mixins: [
      require('../mixins/foundation') // eslint-disable-line
    ],
    data () {
      return {
        all: [],
        waiting: [],
        active: []
      }
    },
    watch: {
      '$route': 'changeTab'
    },
    methods: {
      changeTab () {
        const { status = 'all' } = this.$route.params
        $('.tabs-panel').removeClass('is-active').attr('aria-hidden', '')
        $(`#${status}`).addClass('is-active').attr('aria-hidden', 'false')

        $('.tabs-title').removeClass('is-active')
        $(`.tabs-title-${status}`).addClass('is-active')
      }
    },
    created () {
      Vue.http.get(`http://server-queue.com/queues/${this.$route.params.id}`).then(response => {
        this.all = response.body
        createStatuses.call(this, this.all)
        this.changeTab()
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
  .is-active a {
    background: #f8f8f8;
  }
</style>
