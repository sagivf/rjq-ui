<template>
  <div>
    <div class="row collapse">
      <h1>Queue {{ $route.params.id }}</h1>
    </div>
    <div class="row collapse">
      <div class="medium-3 columns rjq-status-list">
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
            <jobs v-bind:list="all"></jobs>
          </div>
          <div class="tabs-panel" id="active">
            <jobs v-bind:list="active"></jobs>
          </div>
          <div class="tabs-panel" id="waiting">
            <jobs v-bind:list="waiting"></jobs>
          </div>
          <div class="tabs-panel" id="completed">
            <jobs v-bind:list="completed"></jobs>
          </div>
          <div class="tabs-panel" id="cancelled">
            <jobs v-bind:list="cancelled"></jobs>
          </div>
          <div class="tabs-panel" id="failed">
            <jobs v-bind:list="failed"></jobs>
          </div>
          <div class="tabs-panel" id="terminated">
            <jobs v-bind:list="terminated"></jobs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Vue from 'vue'
  import Jobs from './Jobs.vue'
  import $ from 'jquery'

  const statuses = ['waiting', 'active', 'completed', 'failed', 'cancelled', 'terminated']
  function createStatuses (jobs) {
    this.all = jobs
    statuses.forEach(status => {
      this[status] = jobs.filter(job => job.status === status)
    })
  }

  const queue = {
    mixins: [
      require('../mixins/foundation') // eslint-disable-line
    ],
    data () {
      const _statuses = { all: [] }
      statuses.forEach(name => { _statuses[name] = [] })
      return _statuses
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
      Vue.http.get(`rjq-api/queues/${this.$route.params.id}`).then(response => {
        this.all = response.body
        createStatuses.call(this, this.all)
        this.changeTab()
      }).catch(response => {
        console.error(response)
      })
    },
    components: {
      Jobs
    }
  }

  export default queue
</script>

<style lang="scss" scoped>
  .is-active a {
    background: #f8f8f8;
  }
  .row.collapse > .rjq-status-list {
    padding-right: 20px;
  }

</style>
