const express = require('express');
require("dotenv").config();
const userController = require("../controller/userController");
const { default: mongoose } = require('mongoose');
const bcrypt = require("bcrypt");
const connect = require("../middleware/conn");
const session = require("express-session");
const user = require("../models/userModel");
const cors = require("cors");



const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
const URI = process.env.URI;
connect();
app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());





app.post("/api/register", async (req, res) => {
    
    try {
        console.log("working");
        const { name, email, password } = req.body;

        const existingUser = await user.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ error: "User already exists" });
        }

        const newUser = new user({
          name,
          email,
          password,
        });

        await newUser.save();
        res.status(200).json({ message: "Registration successful" });
        
    } catch (error) {
        console.log("error in saving user", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
})

app.post("/api/login", async (req, res) => {
  try {
    console.log("working4");
      const { email, password } = req.body;
      console.log(email);
      console.log(password);
    const loggedInUser = await user.findOne({ email:email });
    if (!loggedInUser) {
      console.log("user doesn't exist");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    
    if (password!==loggedInUser.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Set the session ID in the response header
    req.session.userId = loggedInUser._id;
    res.header("Session-ID", req.sessionID);

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log("error in login", error.message);
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get("/api/check", (req, res) => {
console.log("working");
  res.json({ message: "Backend is connected!" });
});


app.get("/", (req, res) => {
    res.send("heyy brother");
})


app.listen(PORT,()=>{console.log(`server is running at http://localhost:${PORT}`);})





