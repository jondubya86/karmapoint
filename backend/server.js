var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var db = require('./models')
// var router = require('./route')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, '../frontend/public')))

// app.use("/api", router)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/views/index.html'))
})


db.sequelize.sync()
.then(()=>app.listen(3000,()=>console.log('listening to port 3000')))

module.exports = app