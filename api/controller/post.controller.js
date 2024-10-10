import prisma from "../lib/prisma.js";

//get all post
export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();

    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json({ message: "Failed to get posts" });
  }
};

// get a post
export const getPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include:{
        postDetail:true,
        user:{
            select:{
                id:true,
                email:true,
                username:true,
                avatar:true,
            }
        }
      }
    });
    res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ message: "Failed to get post" });
  }
};

export const updatePost = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({ message: "Failed to get posts" });
  }
};

//      create a new post
export const addPost = async (req, res) => {
  try {
    const body = req.body;
    const tokenUserId = req.userId;

    console.log(body);
    console.log(tokenUserId);
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: { 
            create:body.postDetail
        }
      },
    });

    res.status(200).json(newPost);
  } catch (err) {
    return res.status(500).json({ message: `${err}` });
  }
};

// delete post
export const deletePost = async (req, res) => {
    console.log("deletepost called")
  const tokenUserId = req.userId;
  const postId = req.params.id;
  console.log(tokenUserId,postId);
  try {
    // find the post
    // check the post userId matches with tokenUserId

    const post = await prisma.post.findUnique({
      where: { id:postId },
    });

    console.log("post found ",post)
    if (post.userId !== tokenUserId) {
      return res.status(404).json({ message: "Not Authorized" });
    }
    await prisma.post.delete({
      where: { id:postId },
    });
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    return res.status(500).json({ message: `Failed to delete ${err}` });
  }
};
