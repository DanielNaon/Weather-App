const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/Wether-App-FS',  { useNewUrlParser: true } )

const weatherSchema = new Schema({
    name: String,
    temperature: Number,
    condition: String,
    conditionPic: String
})

const Weather = mongoose.model('weather', weatherSchema, 'weather')

let p1 = new Weather({
    name: 'london',
    temperature: 37.5,
    condition: 'check',
    conditionPic: 'check'
})
let p2 = new Weather({
    name: 'paris',
    temperature: 34.5,
    condition: 'check',
    conditionPic: 'check'
})
// p1.save()
// p2.save()
module.exports = Weather