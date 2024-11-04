const express = require('express')
const connectDB = require('./model/connection')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

connectDB()

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use('/static', express.static('public'))
app.use(require('./routes/routes'))

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})