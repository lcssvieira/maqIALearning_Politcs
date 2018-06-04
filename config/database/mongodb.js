const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:/maqiaLearning");
mongoose.Promise = global.Promise;

module.exports = mongoose;