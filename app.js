const geocode = require('./web-server/utils/geocode.js.js')
const forecast = require('./web-server/utils/forecast.js.js')
const address = process.argv.slice(2)[0]
geocode(address ,(error , {longitude,latitude,place_name})=>{
    if(!address){
        return console.log('please provide and address')
    }
    else if(error){
      return console.log(error)  
    }
    console.log(place_name)
    forecast(latitude,longitude,(error,{summary,temperature,precipProbability})=>{
        if(error){
            return console.log(error)
        }
        console.log(summary + ' Its '+ temperature + ' degrees outside and there is '+ precipProbability + '% probability of rain today')
    })
})