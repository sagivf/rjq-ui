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
          <td>{{ queue.name }}</td>
          <td>{{ queue.waiting }}</td>
          <td>{{ queue.active }}</td>
          <td>{{ queue.completed }}</td>
          <td>{{ queue.cancelled }}</td>
          <td>{{ queue.failed }}</td>
          <td>{{ queue.terminated }}</td>
          <td>{{ queue.total }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  const queues = {
    data () {
      return {
        queues: []
      }
    },
    created () {
      fetch('/queues').then(queues => {
        console.info(queues)
        this.queues = queues
      }).catch(err => {
        console.error(err)
        this.queues = [
          {
            name: 'Registration Emails',
            waiting: 1,
            active: 0,
            completed: 0,
            cancelled: 0,
            failed: 0,
            terminated: 0,
            total: 1
          },
          {
            name: 'Document Crawling',
            waiting: 129,
            active: 1,
            completed: 0,
            cancelled: 0,
            failed: 0,
            terminated: 0,
            total: 130
          }
        ]
      })
    }
  }

  export default queues
</script>

<style lang="scss" scoped>

  .image {
    margin-top: 0.75rem;
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
