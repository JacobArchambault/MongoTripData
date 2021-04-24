var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/travel');

var tripSchema = new mongoose.Schema({
	date: { type: Date, required: true, unique: true },
	city: { type: String, required: true },
	miles: { type: Number, required: true },
	gallons: { type: Number, required: true }
});

tripSchema.virtual('miles-per-gallon').get(() => this.miles / this.gallons);

module.exports = mongoose.model('Trip', tripSchema);