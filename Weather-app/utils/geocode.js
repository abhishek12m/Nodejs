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


// const axios=require('axios');

// const geocode=(location,callback)=>{
//     const url=`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}&aqi=no`;

//     axios.get(url).then(response=>{
//         const data=response.data;
//         callback(undefined,`${location}'s Latitude = ${data.location.lat} and Longitude = ${data.location.lon}.`);
//     })
//     .catch(error=>{
//         // console.log(error.response.data)
//         if(error.response.data){
//             callback(error.response.data.error.message,undefined);
//         }
//         else{
//             callback(`Unable to access the weather api ${error}`, undefined);
//         }
//     })
// }

module.exports=geocode;