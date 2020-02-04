const mongoose = require("mongoose");

const TimeEntrySchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users"
	},
	taskname: {
		type: String
	},
	project: {
		type: String
	},
	startdate: {
		type: Date,
		default: Date.now
	},
	enddate: {
		type: Date,
		default: Date.now
	}
});

module.exports = TimeEntry = mongoose.model("time-records", TimeEntrySchema);
