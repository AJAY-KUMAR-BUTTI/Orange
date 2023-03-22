const mongoose = require("mongoose");

const addLeadSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
    minLength : 10
  },
});

const addLeadModel = mongoose.model("addLead", addLeadSchema);

module.exports = addLeadModel;
