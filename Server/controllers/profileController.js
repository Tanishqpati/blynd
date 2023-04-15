const Profile = require("../models/Profile");
const mongoose = require("mongoose")

//getting all profiles
const getProfiles = async (req, res) => {
  const profiles = await Profile.find({}).sort({ createsAt: -1 });
  res.status(200).json(profiles);
};

//getting single profile
const getProfile = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No such profile'})
  }

  const profile = await Profile.findById(id);
  if (!profile) {
    return res.status(404).json({ error: "No such profile" });
  }
  res.status(200).json(profile);
};

//creating a new profile
const createProfile = async (req, res) => {
  const {
    first_name,
    user_id,
    dob_day,
    dob_month,
    dob_year,
    gender_identity,
    gender_interest,
    about,
    height,
    matches,
    url1,
    url2,
    url3,
    url4,
    url5,
    url6,
  } = req.body;

  //adding doc to db

  try {
    const profile = await Profile.create({
      first_name,
      user_id,
      dob_day,
      dob_month,
      dob_year,
      gender_identity,
      gender_interest,
      about,
      height,
      matches,
      url1,
      url2,
      url3,
      url4,
      url5,
      url6,
    });
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//deleting a profile
const deleteProfile = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ error: 'Invalid profile id' });
    }

    const profile = await Profile.findOneAndDelete({_id: id})

    if (!profile) {
        return res.status(400).json({ error: "No such profile" });
      }

      res.status(200).json(profile)
}


//updating a profile
const updateProfile = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ error: 'Invalid profile id' });
    }
    const profile = await Profile.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!profile) {
        return res.status(400).json({ error: "No such profile" });
      }

      res.status(200).json(profile)
}



module.exports = {
  getProfiles,
  getProfile,
  createProfile,
  deleteProfile,
  updateProfile
};
