const request = require('request')
const forecast = (latitude,longitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/4000d4d40e964c055d8ad654e546d189/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?units=si'
request({url: url, json: true }, (error,response)=>{
    if(error){
        callback("Unable to connect to the network. Please check your network connection and then try again.",undefined)
    }
    else if(response.body.code ===400){
        callback("latitude longitude does not exists",undefined)
    }
    else{
        callback(undefined,{
            summary:response.body.daily.data[0].summary,
            temperature:response.body.currently.temperature,
            precipProbability:response.body.currently.precipProbability

        })
    
    }
    })
}
module.exports = forecast
