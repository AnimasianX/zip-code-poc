import { Meteor } from "meteor/meteor";

const demoKey = "DemoOnly00PjWeusDN66SDekM59ZFWQN0Jn4HvAtAGBjERbAX7mgak0Z6GgalXPU"

Meteor.methods({
    getDistanceBetweenTwoZip(zip1, zip2){
 
     try{
      return HTTP.get(`https://www.zipcodeapi.com/rest/${demoKey}/distance.json/${zip1}/${zip2}/mile`);
     }
     catch(err){
       throw err;
     }
 },

    getDistanceFromUser(zip1, listOfZips){
      console.log(zip1  )
      const csvZips = listOfZips.join();
      
      const res = csvZips.replace(/([,])/g,"%2C");

      console.log(res);
      try{
        
        return HTTP.get(`https://www.zipcodeapi.com/rest/${demoKey}/multi-distance.json/${zip1}/${res}/mile`);


      }catch(err){
        throw err;
      }
    }
 
 })