import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //hash password
    if (!password || !email) {
      throw new Error("Email/password missing ");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    //create a new user
    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User created successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `${err}` });
  }

  //save it to database
};
export const login = async (req, res) => {
    console.log("login called")
  const { username, password } = req.body;

  //check if user exists
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    })
    if (!user) {
      res.status(401).json({ message: "Invalid Credential" });
    }

     // match the password

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ message: "Invalid Credential" });
    }
    const age = 1000*60*60*24*7
     //generate cookie token and send to user

     const token = jwt.sign(
        {id:user.id}, 
        process.env.JWT_SECRET_KEY,
        {expiresIn:age}
    )
    console.log("jwt token")
    console.log("jwt token", token)
    //  res.setHeader("Set-Cookie","test","myValue")

    
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:age
    }).status(200).json({message:"Login successful"})

  } catch (err) {
    res.status(500).json({ message: err });
  }
 

 
};
export const logout = (req,res) => {

    res.clearCookie("token").status(200).json({message:'Logout Successful'});
};
