import { Meteor } from "meteor/meteor";

Meteor.methods({
    getDistanceBetweenTwoZip(zip1, zip2){
 
     try{
      return HTTP.get(`https://www.zipcodeapi.com/rest/DemoOnly00fapXZVgXcitm4aEJC3KfK1lDyAosped2aLEPB3yu1eC4YB62vrBJlY/distance.json/${zip1}/${zip2}/mile`);
 
     }
     catch(err){
       throw err;
     }
 },
 
 })