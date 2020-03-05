const request = require('request')
const url = 'https://api.darksky.net/forecast/4000d4d40e964c055d8ad654e546d189/37.8267,-122.4233?units=si'
const curl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ3JlZW5pbmRpYW4iLCJhIjoiY2s3ZGxha2NjMDFhYjNrbzF2a2JqdmFoNCJ9.E0jqoCWivym70sqZWdXoXA&limit=1'
// request({url: url, json: true }, (error,response)=>{
//     console.log(response.body.daily.data[0].summary + " The temperature today is " + response.body.currently.temperature + " degree centigrade and there is " + response.body.currently.precipProbability + "% probability of rain today!")
// })
request({url: curl, json: true},(error,response)=>{
    if(error){
        console.log("Unable to connect to the network. Please check your network connection and then try again.")
    }
    else if(response.body.features.length===0){
        console.log("Invalid search term. Please try and search relevant city names.")
    }
    else{
        console.log('latitude is '+ response.body.features[0].geometry.coordinates[0] + ' longitude is '+ response.body.features[0].geometry.coordinates[1])
    const longitude = response.body.features[0].geometry.coordinates[1]
    const latitude = response.body.features[0].geometry.coordinates[0]

    }
    })