import React from 'react';
import CommentIndexItem from './comments_index_item';

const CommentIndex = props => {
   const comments = props.comments;
   // debugger
   return(
      <>
         <div className="comments-index-container">
            <ul className="comments-list">
               {
                  comments.map((comment,idx) => {
                     return (
                        <CommentIndexItem key={idx} comment={comment} 
                           currentUser={props.currentUser}
                        />
                     )
                  })
               }
            </ul>
         </div>
      </>
   )
}

export default CommentIndex;