import postCommentModel from "../models/postCommentModel.js";

export const AddPostCommentController = async (req, res) => {
  try {

    // Todo 
    // Get postId and user id from params and comment access from body content
    // 
    const { postId, userId } = req.params;
    const { comment } = req.body;

    if (!postId || !userId || !comment) {
      return res.status(400).send({
        success: false,
        message: "All fields are required !",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Error in Add post comment Controller",
    });
  }
};
