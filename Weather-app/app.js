// require('dotenv').config();

// console.log(process.env.API_KEY)
// const request=require('request');
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');
const location=process.argv[2];
// console.log(process.argv[2])
if(!location){
    return console.log('Provide the location -')
}
const days=1;
// const url=`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=no`;


// request({url,json:true},(error,response)=>{
//     if(error){
//         console.log(`Unable to access the weather api ${error}`);
//     }
//     else if(response.body.error){
//         console.log(response.body.error.message);
//         return;
//     }
//     console.log(`${location}'s Latitude = ${response.body.location.lat} and Longitude = ${response.body.location.lon}.`);
// })


geocode(location,(error,data)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(data);
})
forecast(location,days,(error,data)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(data);
})