require("dotenv").config();
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const express = require("express");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/BlyndUser");
const authRoutes = require("./routes/auth");
const {MongoClient} = require('mongodb')
const signupLoginUserRoutes = require("./routes/user.js");

// express app
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["blynd"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/profiles", UserRoutes);
app.use("/api/user", signupLoginUserRoutes);
app.use("/auth", authRoutes);


// Get all the Gendered Users in the Database
app.get('/gendered-users', async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI)
  const gender = req.query.gender

  try {
      await client.connect()
      const database = client.db('test')
      const users = database.collection('users')
      const query = {gender_identity: {$eq: gender}}
      const foundUsers = await users.find(query).toArray()
      res.json(foundUsers)

  } finally {
      await client.close()
  }
})

// Update User with a match
app.put('/addmatch', async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI)
  const {UserId, matchedUserId} = req.body

  try {
      await client.connect()
      const database = client.db('test')
      const users = database.collection('users')

      const query = {UserId: UserId}
      const updateDocument = {
          $push: {matches: {UserId: matchedUserId}}
      }
      const user = await users.updateOne(query, updateDocument)
      res.send(user)
  } finally {
      await client.close()
  }
})

// updating further details of user
app.put("/user", async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI);
  const formData = req.body.formData;

  try {
    await client.connect();
    const database = client.db("test");
    const users = database.collection("users");
    console.log(formData)

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
});

//getting the user
app.get('/user', async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI)
  const userId = req.query.UserId

  try {
      await client.connect()
      const database = client.db('test')
      const users = database.collection('users')

      const query = {UserId: userId}
      const user = await users.findOne(query)
      res.send(user)

  } finally {
      await client.close()
  }
})

//getting the users

app.get('/users', async (req, res) => {
  const client = new MongoClient(process.env.MONGO_URI)
  const userIds = JSON.parse(req.query.userIds)
  console.log(userIds)

  try {
      await client.connect()
      const database = client.db('test')
      const users = database.collection('users')

      const pipeline =
          [
              {
                  '$match': {
                      'UserId': {
                          '$in': userIds
                      }
                  }
              }
          ]

      const foundUsers = await users.aggregate(pipeline).toArray()

      res.json(foundUsers)

  } finally {
      await client.close()
  }
})



//connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("conected to db & listening on port", process.env.PORT);
});
