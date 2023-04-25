const Profile = require("../models/Profile");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

// getting all profiles
// const getGenderedUsers = async (req, res) => {
//   const profiles = await Profile.find({}).sort({ createsAt: -1 });
//   res.status(200).json(profiles);
// };

const getGenderedUsers = async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);
  const gender = req.query.gender;

  try {
    await client.connect();
    const database = client.db("test");
    const users = database.collection("users");
    const query = [{ $match: { gender_identity: gender } }];
    const foundUsers = await users.aggregate(query).toArray();

    res.json(foundUsers);
  } finally {
    await client.close();
  }
};
const addMatch = async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);
  const { userId, matchedUserId } = req.body;

  try {
    await client.connect();
    const database = client.db("test");
    const users = database.collection("users");

    const query = { UserId: userId };
    const updateDocument = {
      $push: { matches: { UserId: matchedUserId } },
    };
    const user = await users.updateOne(query, updateDocument);
    res.send(user);
  } finally {
    await client.close();
  }
}
const finalAccountCreation = async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);
  const formData = req.body;

  try {
    await client.connect();
    const database = client.db("test");
    const users = database.collection("users");
    console.log(formData);

    const query = { UserId: formData.UserId };

    const updateDocument = {
      $set: {
        first_name: formData.first_name,
        dob_day: formData.dob_day,
        dob_month: formData.dob_month,
        dob_year: formData.dob_year,
        gender_identity: formData.gender_identity,
        gender_interest: formData.gender_interest,
        url1: formData.url1,
        url2: formData.url2,
        url3: formData.url3,
        url4: formData.url4,
        url5: formData.url5,
        url6: formData.url6,
        about: formData.about,
        matches: formData.matches,
        height: formData.height,
      },
    };

    const insertedUser = await users.updateOne(query, updateDocument);

    res.json(insertedUser);
  } finally {
    await client.close();
  }
};
const getUser = async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);
  const UserId = req.query.userId;
  // console.log(req);

  try {
    await client.connect();
    const database = client.db("test");
    const users = database.collection("users");

    const query = [{ $match: { UserId: UserId } }];
    const user = await users.aggregate(query).toArray();
    res.send(user[0]);
  } finally {
    await client.close();
  }
};
const getUsers = async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);
  const userIds = JSON.parse(req.query.userIds);
  console.log(userIds);

  try {
    await client.connect();
    const database = client.db("test");
    const users = database.collection("users");

    const pipeline = [
      {
        $match: {
          UserId: {
            $in: userIds,
          },
        },
      },
    ];

    const foundUsers = await users.aggregate(pipeline).toArray();

    res.json(foundUsers);
  } finally {
    await client.close();
  }
};

//getting single profile
const getProfile = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such profile" });
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
const deleteProfile = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Invalid profile id" });
  }

  const profile = await Profile.findOneAndDelete({ _id: id });

  if (!profile) {
    return res.status(400).json({ error: "No such profile" });
  }

  res.status(200).json(profile);
};

//updating a profile
const updateProfile = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Invalid profile id" });
  }
  const profile = await Profile.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!profile) {
    return res.status(400).json({ error: "No such profile" });
  }

  res.status(200).json(profile);
};

module.exports = {
  getGenderedUsers,
  addMatch,
  finalAccountCreation,
  getUser,
  getUsers,
  getProfile,
  createProfile,
  deleteProfile,
  updateProfile,
};
