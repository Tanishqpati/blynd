const express = require("express");
const {
  createProfile,
  getProfiles,
  getProfile,
  updateProfile,
  deleteProfile
} = require("../controllers/profileController");
const requireAuth = require('../middleware/requireAuth')
const router = express.Router();

router.use(requireAuth)

router.get("/", getProfiles);

//get a single profile
router.get("/:id", getProfile);

//post a profile
// router.post("/", createProfile);

// adding the data in the current data
router.put("/", createProfile)

//Delete a profile
router.delete("/:id", deleteProfile);

//update a profile
router.patch("/:id", updateProfile);

module.exports = router;
