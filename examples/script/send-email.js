const { connOptions, qOptions } = require('./')
const Queue = require('rethinkdb-job-queue')
const emailQueue = new Queue(connOptions, qOptions)

const nodemailer = (mailOptions) => {
  var timeout = Math.random() * 1000
  return new Promise ((resolve, reject) => {
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
  Thankyou for registering for this great Application.
  Please click the link below to confirm your email address.

  url`
}

emailQueue.process((job, next) => {
  console.log('Job processing started')
  mailOptions.to = job.to
  mailOptions.text = mailOptions.text.replace('url', job.url)
  return nodemailer(mailOptions).then((info) => {
    console.dir(info)
    return next(null, info)
  }).catch((err) => {
    console.error(err)
    return next(err)
  })
})
