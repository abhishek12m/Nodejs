require('dotenv').config();

// console.log(process.env.API_KEY)
const request=require('request');

const geocode=(location,callback)=>{
    const url=`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=no`;

    request({url,json:true},(error,response)=>{
        if(error){
            callback(`Unable to access the weather api ${error}`,undefined);
        }
        else if(response.body.error){
            callback(response.body.error.message,undefined);
            return;
        }
        callback(undefined,`${location}'s Latitude = ${response.body.location.lat} and Longitude = ${response.body.location.lon}.`);
    })
}

module.exports=geocode;