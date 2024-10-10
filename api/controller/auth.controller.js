import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from 'jsonwebtoken'



const ERROR={
    User_email_key:"Email already in use ",
    User_username_key:"Username already in use"
}
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //hash password
    const existingUser = await prisma.user.findFirst({
        where: {
          OR: [{ username }, { email }]
        }
      });
    if(existingUser && existingUser.username ==username) {return res.status(400).send({message:ERROR['User_username_key']})}
    if(existingUser && existingUser.email ==email){return res.status(400).send({message:ERROR['User_email_key']})}
    const hashedPassword = await bcrypt.hash(password, 10);
    //create a new user
   await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: "User created successfully" });

  } catch (err) {
    // console.log(err.meta.target);
    res.status(500).json({ message: `${err}` });
  }

  //save it to database
};
export const login = async (req, res) => {
 
  console.log("inside login controller")
  const { username, password } = req.body;

  
  try {
   
    const user = await prisma.user.findUnique({
      where: { username },
    })
     //check if user exists
    if (!user) {
      return res.status(469).json({ message: "User not Found" });
    }

     // match the password

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Wrong password" });
    }
    const age = 1000*60*60*24*7
     //generate cookie token and send to user

     const token = jwt.sign(
        {
          id:user.id,
          isAdmin:false
        }, 
        process.env.JWT_SECRET_KEY,
        {expiresIn:age}
    )

    const {password:userPassword, ...userInfo} = user
    //  res.setHeader("Set-Cookie","test","myValue")

    
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:age
    }).status(200).json(userInfo)

  } catch (err) {
    res.status(500).json({ message: err });
  }
 

 
};
export const logout = (req,res) => {

    res.clearCookie("token").status(200).json({message:'Logout Successful'});
};
