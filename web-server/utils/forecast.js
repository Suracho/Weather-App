const request = require('request')
const forecast = (latitude,longitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/4000d4d40e964c055d8ad654e546d189/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?units=si'
request({url, json: true }, (error,{body})=>{
    if(error){
        callback("Unable to connect to the network. Please check your network connection and then try again.",undefined)
    }
    else if(body.code ===400){
        callback("latitude longitude does not exists",undefined)
    }
    else{
        callback(undefined,{
            summary:body.daily.data[0].summary,
            temperature:body.currently.temperature,
            precipProbability:body.currently.precipProbability,
            temperature_high : body.daily.data[0].temperatureHigh,
            temperature_low :body.daily.data[0].temperatureLow
        })
    
    }
    })
}
module.exports = forecast
