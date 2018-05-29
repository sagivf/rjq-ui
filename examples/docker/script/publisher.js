const Queue = require('rethinkdb-job-queue')
const { connOptions, qOptions } = require('./config')
const emailQueue = new Queue(connOptions, qOptions)

console.log('Rethinkdb opts: ', connOptions)
console.log('Rethinkdb queue opts: ', qOptions)

function sendMail (recipient, confirmUrl) {
  const job = emailQueue.createJob()
  job.to = recipient
  job.url = confirmUrl

  emailQueue.addJob(job).then(savedJobs => {
    console.log('Job Added: ' + savedJobs[0].id)
  }).catch(err => console.error(err))
}

// function to run on requests
function requestMailer (timeout) {
  sendMail(
    `you-${timeout}@example.com`,
    `http://confirm-${timeout}.net`
  )
}

(function loop () {
  const rand = Math.round(Math.random() * (3000)) + 500
  setTimeout(function () {
    console.log('publishing with delay: ', rand)
    requestMailer(rand)
    loop()
  }, rand)
}())
