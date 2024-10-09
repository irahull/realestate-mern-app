const prisma = require("../utils/prisma");

// _________________________ All Post _______________________________
const getAllPost = async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const postDatas = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        // property:query.property || undefined,
        // bedroom:parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 100000,
        },
      },
    });
    res.status(200).json({ data: postDatas });
    console.log(postDatas);
  } catch (error) {
    res.status(400).json({ msg: "Failed to get all post" });
  }
};

// _________________________ Single Post _______________________________
const getSinglePost = async (req, res) => {
  const id = req.params.id;
  try {
    const postData = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetails: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });
    res.status(200).json({ data: postData });
  } catch (error) {
    res.status(400).json({ msg: "Failed to get  post" });
  }
};

// _________________________ Add Post _______________________________
const addPost = async (req, res) => {
  const inputs = req.body;
  const userTokenId = req.userId;
  try {
    const newPost = await prisma.post.create({
      data: {
        ...inputs.postData,
        userId: userTokenId,
        postDetails: {
          create: inputs.postDetails,
        },
      },
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Failed to add post", error });
  }
};

// _____________________________ Update Post _______________________________
const updatePost = async (req, res) => {
  try {
    res.status(200).json({ msg: "working" });
  } catch (error) {
    res.status(400).json({ msg: "Failed to update" });
  }
};

// _________________________ Delete Post _______________________________
const deletePost = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (post.userId !== tokenUserId)
      return res.status(401).json({ msg: "Invalid Action" });

    const delPost = await prisma.post.delete({
      where: { id },
    });

    res.status(200).json({ msg: "post deleted", delPost });
  } catch (error) {
    res.status(400).json({ msg: "Failed to delete" });
  }
};
// _________________________ Saved Post _______________________________
// const savePost = async (req, res) => {
//   const postId = req.body.postId;
//   const tokenUserId = req.userId;
//   try {
//     const spost = await prisma.savedPosts.findUnique({
//       where: {
//         userId_postId: {
//           userId: tokenUserId,
//           postId,
//         },
//       },
//     });

//     if (spost) {
//       prisma.savedPosts.delete({
//         where: {
//           id: spost.id,
//         },
//       });
//       return res.status(200).json({ msg: "Post removed from saved post" });
//     } else {
//       await prisma.savedPosts.create({
//         data: {
//           userId: tokenUserId,
//           postId,
//         },
//       });
//     }
//   } catch (error) {
//     res.status(400).json({ msg: "Failed to delete" });
//   }
// };

const userPosts = async (req, res) => {
  const tokenUserId = req.params.userId;
  try {
    const postData = await prisma.post.findMany({
      where: { userId: tokenUserId },
    });
    res.status(200).json({ data: postData });
  } catch (error) {
    res.status(400).json({ msg: "Failed to get  post" });
  }
};

module.exports = {
  getAllPost,
  getSinglePost,
  addPost,
  updatePost,
  deletePost,
  userPosts,
  // savePost,
};
