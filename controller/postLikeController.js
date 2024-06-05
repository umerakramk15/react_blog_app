import blogModel from "../models/blogModel.js";
import postLikeModel from "../models/postLikeModel.js";
import userModel from "../models/userModel.js";

export const postLikeSetController = async (req, res) => {
  try {
    // Todo For PostLikeController :
    // userID and PostID request karni hogi and also validate it
    // validation check already this user and id present or not
    // if not then save on likepostmodel
    //  set data to frontend developer

    const { userId, postId } = req.params;

    if (!postId || !userId) {
      return res.status(400).send({
        success: false,
        message: "All params are required !",
      });
    }

    // validate postid and userid on thier model

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User doesn't exist ",
      });
    }

    const post = await blogModel.findById(postId);

    if (!post) {
      return res.status(400).send({
        success: false,
        message: "post doesn't exist ",
      });
    }

    const likedCheckForValidation = await postLikeModel.findOne({
      postId: postId,
      userId: userId,
    });

    if (likedCheckForValidation) {
      return res.status(400).send({
        success: false,
        message: "You already liked this post",
      });
    }

    const liked = new postLikeModel({ postId, userId });
    await liked.save();

    return res.status(200).send({
      success: true,
      message: "You liked this post successfully",
      liked,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Error in Post Like Controller",
    });
  }
};

export const postLikeDeleteController = async (req, res) => {
  try {
    // Todo For PostLikeController :
    // userID and PostID request karni hogi
    // validation check already this user and id present or not
    // if present then delete on likepostmodel else send response you didn't like this post
    //  set data to frontend developer

    const { userId, postId } = req.params;

    // validate postid and userid on thier model

    if (!postId || !userId) {
      return res.status(400).send({
        success: false,
        message: "All params are required !",
      });
    }

    // validate postid and userid on thier model

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User doesn't exist ",
      });
    }

    const post = await blogModel.findById(postId);

    if (!post) {
      return res.status(400).send({
        success: false,
        message: "post doesn't exist ",
      });
    }

    const unliked = await postLikeModel.findOneAndDelete({
      postId: postId,
      userId: userId,
    });

    if (!unliked) {
      return res.status(400).send({
        success: false,
        message: "You didn't like this post",
      });
    }

    return res.status(200).send({
      success: true,
      message: "You unliked this post successfully",
      unliked,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Error in Post Delete Like Controller",
    });
  }
};

export const postLikeCountController = async (req, res) => {
  try {
    const likedPosts = await postLikeModel.find({});
    const totalLiked = likedPosts.length;

    return res.send({
      success: true,
      message: "Total Liked Posts",
      totalLiked,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Error in Post Like Count Controller",
    });
  }
};

export const postLikeCheckController = async (req, res) => {
  try {
    // TODO
    // 1) Get postid and user id to check and validate it
    // 2) then check post and user existance in their model
    // 3) Check user liked or not
    // 4) then check true and false and return to frontend

    const { postId, userId } = req.params;

    if (!postId || !userId) {
      return res.status(400).send({
        success: false,
        message: "All params are required !",
      });
    }

    // validate postid and userid on thier model

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User doesn't exist ",
      });
    }

    const post = await blogModel.findById(postId);

    if (!post) {
      return res.status(400).send({
        success: false,
        message: "post doesn't exist ",
      });
    }

    const postLikedValidate = await postLikeModel.findOne({
      postId,
      userId,
    });

    if (!postLikedValidate) {
      return res.status(200).send({
        success: false,
        message: "user doesn't Like it",
      });
    }

    return res.status(200).send({
      success: true,
      message: "user liked it",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something error in Liked Check Controller",
    });
  }
};
