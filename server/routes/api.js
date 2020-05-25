const express = require( 'express' )
const app = express()
const router = express.Router()
const request = require('request');
const apikey = 'ab1e0ef3674823e6dd5d58d4d778de26'
const Weather= require('../model/City')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

router.get('/city/:cityName', function(req, response){
    const cityName = req.params.cityName
    // console.log(cityName)
    request(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`, function(err, res, body) {
        console.log(body);
        let newCity = JSON.parse(body)
        response.send(newCity)
        });
})
router.get('/cities', function(req, res){
    Weather.find({}).lean().exec(function(err, citiesDB){
        console.log(citiesDB)
        res.send(citiesDB)
    })
})

router.post('/city', function(req, res){
    console.log(req.body)
    let newCity = req.body
    const p1 = new Weather(newCity)
    console.log(p1)
    p1.save()
})
router.delete('/city/:cityName', function (req, res) { 
    let cityName = req.params.cityName
    Weather.findOneAndRemove({name: cityName}).exec(function(err, response){
        if(err){
            res.send("the document was not found")
        }else{
            res.send("deleted!")
        }
    })

 })

module.exports = router