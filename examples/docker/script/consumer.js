const Queue = require('rethinkdb-job-queue')
const { connOptions, qOptions } = require('./config')

console.log('Rethinkdb opts: ', connOptions)
console.log('Rethinkdb queue opts: ', qOptions)

const emailQueue = new Queue(connOptions, qOptions)

const nodemailer = (mailOptions, timeout) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('nodemailer: ', mailOptions)
      resolve({'nodemailer': mailOptions})
    }, timeout)
  })
}

// setup e-mail data with unicode symbols
const mailOptions = {
  subject: 'Email Address Confirmation',
  text: `
  Thank you for registering for this great Application.
  Please click the link below to confirm your email address.

  url`
}

emailQueue.process((job, next) => {
  mailOptions.to = job.to
  mailOptions.text = mailOptions.text.replace('url', job.url)
  var timeout = Math.random() * 1000
  console.log('Job processing started with delay:', timeout)
  return nodemailer(mailOptions, timeout).then((info) => {
    console.dir(info)
    return next(null, info)
  }).catch((err) => {
    console.error(err)
    return next(err)
  })
})
