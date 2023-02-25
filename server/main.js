import { Meteor } from 'meteor/meteor';
import dotenv from 'dotenv';
import "../imports/api/methods/zipcode"


Meteor.startup(() => {
    dotenv.config({
      path: `${process.env.PWD}/.env`
  });


});

