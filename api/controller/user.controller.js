import express from "express";
import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
  }
};
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Failed to get user" });
  }
};
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...inputs } = req.body;
  console.log("avatar: ");
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized" });
  }
  try {
    //handling password change
    let updatedPassword = null;
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }
    const updatedAvatar = req.body.avatar ? req.body.avatar : ""
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }),
       avatar:updatedAvatar
      },
    });

    console.log(updatedUser)
    // const  { password , ...rest} = updatedUser
   return res.status(200).json(updatedUser);
  } catch (e) {
    console.log(e);
  }
};
export const deleteUser = async (req, res) => {
  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized" });
  }
  try {
    await prisma.user.delete({where: { id }})
    res.status(200).json({message:"User deleted successfully"})
  } catch (e) {
    console.log(e);
  }
};
