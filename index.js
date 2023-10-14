const express = require("express");
const dotenv=require('dotenv');
const cors=require('cors');
const path = require("path");
const connectDB = require("./db/database.js");
const morgan= require("morgan");
const User=require('./models/userModel.js');
const bodyParser=require('body-parser');
const user=require("./controller/user.js");
const jwt=require('jsonwebtoken');
//config env
dotenv.config({path:"../server/.env"})

const app=express({path:"../server"});
// const app=express();

//middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", express.static(path.join(__dirname,"./uploads")))
app.use(cors());

//database config
connectDB();

app.get('/',function(req,res){
    // res.send("Hello");
    // res.render("/");
    res.redirect(301,'https://www.pricebefore.com/')
});
app.get('*', (req, res) => {
    // REDIRECT goes here
    res.redirect('https://www.pricebefore.com/')
  })

// app.post('/register', async(req, res) => {
//         const namex = req.body.fname;
//         const emailx = req.body.femail;
//         const passx=req.body.fpassword;
    
//         const formData = new User({
//             name: namex,
//             email: emailx,
//             password:passx

//         })
    
//         try {
//             await formData.save();
//             res.send("inserted data..");
//             console.log("Yes");
//         } catch(err) {
//             console.log("hjj")
//         }
//     });
app.use("/api/v2/user",user);

    app.post('/login', async(req, res) => {
            // console.log("hi");
            const emailx = req.body.email;
            // console.log(emailx);
            const passx=req.body.password;
            // console.log(passx)
            const found=await User.findOne({email:emailx});
            if(!found){
                console.log("not found")
                // res.send("ERRor");
            }else{
                if(found.password==passx){
                    // res.render("signup");
                    console.log("ybn");
                }else{
                    console.log("Check again");
                }
            }

        });    

const PORT=process.env.PORT || 8080;

app.listen(PORT,function(req,res){
    console.log("Server runnpm startning on port 8080");
})  