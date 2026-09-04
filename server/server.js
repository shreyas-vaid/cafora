const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const User = require("./models/User");
const Cafe = require("./models/Cafe");

const app = express();

app.use(cors());
app.use(express.json());

/* CONNECT DB */
mongoose.connect("mongodb://127.0.0.1:27017/cafe-app")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* REGISTER */
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json("User already exists");

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashed
    });

    await user.save();
    res.json("User Registered");
  } catch (err) {
    res.status(500).json("Error registering user");
  }
});

/* LOGIN */
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json("User not found");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json("Wrong password");

    res.json("Login Success");
  } catch (err) {
    res.status(500).json("Login error");
  }
});

/* ADD CAFE */
app.post("/add-cafe", async (req, res) => {
  try {
    const { name, location, rating, vibe } = req.body;

    const cafe = new Cafe({
      name,
      location,
      rating,
      vibe
    });

    await cafe.save();

    res.json("Cafe Added");
  } catch (err) {
    res.status(500).json("Error adding cafe");
  }
});

/* GET CAFES */
app.get("/cafes", async (req, res) => {
  try {
    const cafes = await Cafe.find();
    res.json(cafes);
  } catch (err) {
    res.status(500).json("Error fetching cafes");
  }
});

/* START SERVER */
app.listen(5000, () => console.log("Server running on port 5000"));