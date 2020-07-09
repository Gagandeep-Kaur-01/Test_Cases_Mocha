const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mongotube", {useNewUrlParser: true});

mongoose.connection
   .once("open", ()  => console.log('connected'))
   .on("error", (error) => {
       console.log("Your error", error);
   });
   
   //once and on are listeners to the events, whatever the event is happening, whatever successful, failure, etc event be.
   
