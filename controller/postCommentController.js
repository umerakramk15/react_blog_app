import postCommentModel from "../models/postCommentModel.js";
import blogModel from "../models/blogModel.js";
import userModel from "../models/userModel.js";

export const AddPostCommentController = async (req, res) => {
  try {
    // Todo
    // Get postId and user id from params and comment access from body content
    // validate the post id exist and user exist
    // Then save comment object model and retern message to user

    const { postId, userId } = req.params;
    const { comment } = req.body;

    // validate all field present

    if (!postId || !userId || !comment) {
      return res.status(400).send({
        success: false,
        message: "All fields are required !",
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

    const commentSaved = await postCommentModel({
      postId,
      userId,
      comment,
    });

    commentSaved.save();

    return res.status(200).send({
      message: "comment Saved ",
      success: true,
      commentSaved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something Error in Add post comment Controller",
    });
  }
};

export const deletePostCommentController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await postCommentModel.findByIdAndDelete({ _id: id });
    if (!comment)
      return res.status(400).send({
        success: false,
        message: "Something Error to find comment",
      });

    return res.status(200).send({
      success: true,
      message: "Deleted SuccessFully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Delete post comment Controller",
    });
  }
};
