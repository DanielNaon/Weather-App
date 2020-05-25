const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = express.Router()
const Weather = require('./server/model/City')
const Api = require('./server/routes/api')
const port = 3000
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

mongoose.connect('mongodb://localhost/Wether-App-FS',  { useNewUrlParser: true } )
const request = require('request');

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use( '/', Api )
app.listen(port, function(){
    console.log(`server is running on ${port}`)
})