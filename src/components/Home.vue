<template>
  <div class="row align-middle">
    <div class="small-10 medium-5 small-offset-1 columns image">
      <img src="../assets/img/thinkerjoblist.png">
    </div>
    <div class="small-12 medium-5 columns">
      <h1>{{ msg }}</h1>
      <p>Insight to your queues status.</p>
      <a class="button secondary call-button"
         href="https://github.com/grantcarthew/node-rethinkdb-job-queue/wiki"
         target="_blank">
        <i class="icon-puzzle"></i>
        RethinkDB Job Queue
      </a>
      <a class="button secondary hollow call-button"
         href="https://github.com/hal0gen/vue-foundation"
         target="_blank">
        <i class="icon-github-circled"></i>
        Source
      </a>
      <h2>More Resources</h2>
      <ul>
        <li><a href="https://github.com/hal0gen/vue-foundation" target="_blank">VueJS + Foundation</a></li>
        <li><a href="https://vuejs.org/v2/guide/" target="_blank">VueJS</a></li>
        <li><a href="https://github.com/outbrain/Leonardo" target="_blank">Leonardo JS</a></li>
        <li><a href="http://foundation.zurb.com/sites/docs" target="_blank">Foundation</a></li>
        <li><a href="http://element.eleme.io/" target="_blank">UI Library</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'RethinkDB Job Queue'
      }
    }
  }
</script>

<style lang="scss" scoped>

  .image {
    margin-top: 5rem;
    margin-bottom: 1.5rem;
  }

  .call-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }


</style>
