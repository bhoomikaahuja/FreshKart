const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const User = require("./signUpDataSchema");
const bcrypt = require("bcryptjs")

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://bhoomikaahuja23:BhoomiMongo23@cluster0.jgbruwc.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
).then(()=>{
  console.log("database connected")
});


app.post("/loginData", async (req, res) => {
    //   console.log(req.body);
    const {userName, passWord} = req.body;

    const user = await User.findOne({ userName });
   
    const isMatch = await bcrypt.compare(passWord, user.passWord);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    //login successful
    if (user) {
      // console.log(presentUserType);
      res.send(user);
      console.log("logged in");
    }
    //login failed
    else {
      res.send("wrong Credentials");
      console.log("Wrong credentials");
    }
  });
  app.post("/signUpData", async (req, res) => {
    // console.log(req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const userName = req.body.userName;
    const passWord = req.body.passWord;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(passWord, salt);

    const formData = new User({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      passWord: hashedPassword,
    });
    try {
      await formData.save();
      console.log("data inserted");
      // console.log("duplicate found")
      res.send("signup success")
    } catch (err) {
      console.log(err);
      res.send("userName already exist");
    }
  });

  app.post("/newPassWordData", async (req, res) => {
  const userName = req.body.userName;
  const newPassWord = req.body.passWord;
  //const filter = { userName: userName };
  
  let user = await User.findOne({userName});
  user.passWord = newPassWord;
  await user.save()
  res.send("Password Updated");
});
  















const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
