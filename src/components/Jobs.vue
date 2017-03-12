<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>Jobs</h1>
        <ul>
          <li>Searching Jobs</li>
          <li>Creating Jobs</li>
          <li>Canceling Jobs</li>
          <li>Scheduling Jobs</li>
        </ul>
    </div>
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
