const request = require('request')
url = 'https://api.darksky.net/forecast/4000d4d40e964c055d8ad654e546d189/37.8267,-122.4233?units=si'
request({url: url, json: true }, (error,response)=>{
    console.log(response.body.daily.data[0].summary + " The temperature today is " + response.body.currently.temperature + " degree centigrade and there is " + response.body.currently.precipProbability + "% probability of rain today!")
})