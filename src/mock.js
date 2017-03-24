import 'leonardojs'

window.Leonardo.addStates([
  {
    name: 'Get Queues',
    url: '/queues',
    verb: 'GET',
    options: [
      {
        name: 'success',
        status: 200,
        data: [
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
      },
      { name: 'error 500', status: 500 },
      { name: 'error 401', status: 401 }
    ]
  }
])

window.Leonardo.activateStateOption('Get Queues', 'success')
