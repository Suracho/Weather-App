const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const address = process.argv.slice(2)[0]
geocode(address ,(error , data)=>{
    if(!address){
        return console.log('please provide and address')
    }
    else if(error){
      return console.log(error)  
    }
    console.log(data.place_name)
    forecast(data.latitude,data.longitude,(error,forecastdata)=>{
        if(error){
            return console.log(error)
        }
        console.log(forecastdata.summary + ' Its '+ forecastdata.temperature + ' degrees outside and there is '+ forecastdata.precipProbability + '% probability of rain today')
    })
})
