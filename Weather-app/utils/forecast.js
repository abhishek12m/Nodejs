require('dotenv').config();

// console.log(process.env.API_KEY)
const request=require('request');

const forecast=(location,days,callback)=>{
    const url=`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;

    request({url,json:true},(error,response)=>{
        if(error){
            callback(`Unable to access the weather api ${error}`,undefined);
        }
        else if(response.body.error){
            callback(response.body.error.message,undefined);
            return;
        }
        callback(undefined,`${location} - It is currently ${response.body.current.temp_c} degrees out. There is a ${response.body.forecast.forecastday[0].hour[1].chance_of_rain}% chance of rain.`);
        // callback(undefined,response.body.forecast.forecastday[0].hour[1].chance_of_rain);
    })
}

module.exports=forecast;