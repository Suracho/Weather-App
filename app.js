const request = require('request')
url = 'https://api.darksky.net/forecast/4000d4d40e964c055d8ad654e546d189/37.8267,-122.4233'
request({url: url }, (error,response)=>{
    const data = JSON.parse(response.body)
    console.log(data.currently)
})