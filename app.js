const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
geocode(process.argv.slice(2)[0],(error , data)=>{
    if(error){
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
