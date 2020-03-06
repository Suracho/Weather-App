const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
geocode('Philadelphia',(error , data)=>{
    console.log(error)
    console.log(data)
})
forecast('37.8267','-122.4233',(error,data)=>{
    console.log(error)
    console.log(data)
})