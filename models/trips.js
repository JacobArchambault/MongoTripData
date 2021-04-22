var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trips');  

var tripSchema = new mongoose.Schema({
	date: {type: Date, required: true, unique: true},
	city: {type: String, required: true},
	miles: {type: Number, required: true},
	gallons: {type: Number, required: true}
});

tripSchema.virtual('miles-per-gallon').get(() => {  
	var years = Date.now() - this.dob;
	return Math.floor(years / 1000/ 60 / 60 / 24 / 365);
});

tripSchema.virtual('full_name').get(() => {  
     return this.miles / this.gallons;
});

module.exports = mongoose.model('Trip', tripSchema);