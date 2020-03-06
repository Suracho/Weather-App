const request = require('request')
const geocode = (address, callback)=>{
    const curl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZ3JlZW5pbmRpYW4iLCJhIjoiY2s3ZGxha2NjMDFhYjNrbzF2a2JqdmFoNCJ9.E0jqoCWivym70sqZWdXoXA&limit=1'
    request({url: curl, json: true},(error,response)=>{
        
        if(error){
            callback("Unable to connect to the network. Please check your network connection and then try again.",undefined)
        }
        else if(response.body.features.length===0){
            callback("Invalid search term. Please try and search relevant city names.",undefined)
        }
        else{
            callback(undefined,{
             longitude : response.body.features[0].geometry.coordinates[0],
             latitude : response.body.features[0].geometry.coordinates[1],
             place_name : response.body.features[0].place_name
    
            })
        
        }
        })
} 
module.exports = geocode