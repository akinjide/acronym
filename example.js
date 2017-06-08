const acronym = require('./');

acronym('for your information', (err, resp) => {
  if (err) {
    console.log(err)
  }

  console.log(resp)
})

acronym('be right back')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

acronym('talk to you later')
  .then(console.log)
  .catch(console.error)