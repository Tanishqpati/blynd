const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  user_id: { type: String, required: true },
  dob_day: {
    type: Number,
    required: true,
  },
  dob_month: {
    type: Number,
    required: true,
  },
  dob_year: {
    type: Number,
    required: true,
  },
  gender_identity: {
    type: String,
    required: true,
  },
  gender_interest: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  matches: {
    type: Array,
    required: false,
  },
  url1: {
    type: String,
    required: false,
  },
  url2: {
    type: String,
    required: false,
  },
  url3: {
    type: String,
    required: false,
  },
  url4: {
    type: String,
    required: false,
  },
  url5: {
    type: String,
    required: false,
  },
  url6: {
    type: String,
    required: false,
  },
}, {timestamps: true});

module.exports = mongoose.model('Profile', profileSchema)
