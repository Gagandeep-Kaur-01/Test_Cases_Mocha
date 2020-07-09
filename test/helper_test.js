const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //ES6 - Promise

before((done) =>  {
mongoose.connect("mongodb://localhost/mongotube", {useNewUrlParser: true});

mongoose.connection
   .once("open", ()  =>  {
   // console.log('connected'))
   done();
})

   .on("error", (error) => {
       console.log("Your error", error);
   });
   });
   //once and on are listeners to the events, whatever the event is happening, whatever successful, failure, etc event be.
   

   beforeEach((done) => {
    mongoose.connection.collections.students.drop(() =>{
     done();
	});
});