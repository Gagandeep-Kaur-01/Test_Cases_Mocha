const mongoose = require('mongoose'); //imported mongoose

const Schema = mongoose.Schema; //defining schema using Schema variable

const StudentSchema = new Schema({ //actual schema, the which we require like name, age, dob, proicing, etc whatever that.
     name: String,
});

const Student = mongoose.model('student', StudentSchema); //make entry into the database