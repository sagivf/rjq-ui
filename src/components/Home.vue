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
        Queue
      </a>
      <a class="button secondary hollow call-button" href="https://github.com/hal0gen/vue-foundation"><i
          class="icon-github-circled"></i>Source</a>
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
