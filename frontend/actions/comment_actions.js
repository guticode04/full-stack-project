import * as CommentApiUtil from '../utils/comment_api_utils';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComment = comment => ({
   type: RECEIVE_COMMENT,
   comment
});

const removeComment = commentId => ({
   type: REMOVE_COMMENT,
   commentId
});

export const fetchComment = commentId => dispatch => {
   return CommentApiUtil.fetchComment(commentId)
      .then(comment => dispatch(receiveComment(comment)))
};

export const createComment = comment => dispatch => {
   return CommentApiUtil.createComment(comment)
      .then(createdComment => dispatch(receiveComment(createdComment)))
};

export const updateComment = comment => dispatch => {
   return CommentApiUtil.updateComment(comment)
      .then(updatedComment => dispatch(receiveComment(updatedComment)))
}

export const deleteComment = commentId => dispatch => {
   return CommentApiUtil.deleteComment(commentId)
   .then(() => dispatch(removeComment(commentId)))
}