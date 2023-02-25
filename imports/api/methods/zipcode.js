import { Meteor } from "meteor/meteor";

Meteor.methods({
    getDistanceBetweenTwoZip(zip1, zip2){
 
     try{
      return HTTP.get(`https://www.zipcodeapi.com/rest/DemoOnly00ZyLDUcO9e8Q8wasev5BCrS0Sbkf4xF81e0D5UIDteUC6eZqUnBM9hv/distance.json/${zip1}/${zip2}/mile`);
 
     }
     catch(err){
       throw err;
     }
 },
 
 })