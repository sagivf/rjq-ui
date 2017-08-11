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
          <td><router-link :to="{ name: 'queue', params: { id: queue.name }}">{{ queue.name }}</router-link></td>
          <td><router-link :to="{ name: 'queue', params: { id: queue.name, status: 'waiting' }}">{{ queue.waiting }}</router-link></td>
          <td><router-link :to="{ name: 'queue', params: { id: queue.name, status: 'active' }}">{{ queue.active }}</router-link></td>
          <td><router-link :to="{ name: 'queue', params: { id: queue.name, status: 'completed' }}">{{ queue.completed }}</router-link></td>
          <td><router-link :to="{ name: 'queue', params: { id: queue.name, status: 'cancelled' }}">{{ queue.cancelled }}</router-link></td>
          <td><router-link :to="{ name: 'queue', params: { id: queue.name, status: 'failed' }}">{{ queue.failed }}</router-link></td>
          <td><router-link :to="{ name: 'queue', params: { id: queue.name, status: 'terminated' }}">{{ queue.terminated }}</router-link></td>
          <td>{{ queue.total }}</td>
          <td><button type="button" class="button alert">Purge</button></td>
          <td><button type="button" class="button alert">Purge Logs</button></td>
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
      Vue.http.get('rjq-api/queues').then(response => {
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
