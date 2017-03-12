<template>
  <div class="row">
    <div class="medium-10 medium-offset-1 columns">
      <h1>Servers</h1>
      <p>
        Here we can put stuff regarding the servers status.<br/>
        Maybe specifically things related to the queueing DB's/tables
      </p>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
