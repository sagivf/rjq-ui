<template>
  <div class="row align-middle">
    <div class="medium-10 medium-offset-1 columns">
      <h1>Queues</h1>
      <table>
        <thead>
        <tr>
          <th></th>
          <th>Waiting</th>
          <th>Active</th>
          <th>Completed</th>
          <th>Cancelled</th>
          <th>Failed</th>
          <th>Terminated</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="queue in queues">
          <td><a :href="'#/queues/' + queue.name + '/active'">{{ queue.name }}</a></td>
          <td><a :href="'#/queues/' + queue.name + '/waiting'">{{ queue.waiting }}</a></td>
          <td><a :href="'#/queues/' + queue.name + '/active'">{{ queue.active }}</a></td>
          <td><a :href="'#/queues/' + queue.name + '/completed'">{{ queue.completed }}</a></td>
          <td><a :href="'#/queues/' + queue.name + '/failed'">{{ queue.failed }}</a></td>
          <td><a :href="'#/queues/' + queue.name + '/cancelled'">{{ queue.cancelled }}</a></td>
          <td><a :href="'#/queues/' + queue.name + '/terminated'">{{ queue.terminated }}</a></td>
          <td>{{ queue.total }}</td>
          <td><button type="button" class="button">Purge</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Vue from 'vue'

  const queues = {
    data () {
      return {
        queues: []
      }
    },
    created () {
      Vue.http.get('http://server-queue.com/queues').then(response => {
        this.queues = response.body
      }).catch(response => {
        console.error(response)
      })
    }
  }

  export default queues
</script>

<style lang="scss" scoped>
</style>
