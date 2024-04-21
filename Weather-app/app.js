require('dotenv').config();

// console.log(process.env.API_KEY)
const request=require('request');
const location='Bangalore';
const url=`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=no`;


request({url,json:true},(error,response)=>{
    if(error){
        console.log(`Unable to access the weather api ${error}`);
    }
    else if(response.body.error){
        console.log(response.body.error.message);
        return;
    }
    console.log(`${location}'s Latitude = ${response.body.location.lat} and Longitude = ${response.body.location.lon}.`);
})
