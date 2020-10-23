import React from 'react';
import { withRouter } from 'react-router-dom';
import AnnotationShow from './annotation_show';

class AnnotationForm extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         body: '',
         user_id: this.props.userId,
         track_id: this.props.trackId,
         start_idx: this.props.startIdx,
         end_idx: this.props.endIdx,
         annotated_text: this.props.annotatedText,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentWillUnmount(){
      this.props.toggleAnnoForm();
      this.props.toggleAnnoButton();
   }

   handleSubmit(e) {
      // debugger
      e.preventDefault();
      const annotationForm = this;
      this.props.createAnnotation(this.state)
         .then((createdAnnotation) => {
            annotationForm.props.clearAnnotatedText();
            annotationForm.props.setAnnotationId(createdAnnotation.annotation.id);
         })
      this.props.toggleAnnoForm();
      //may need to toggle start annotation button or add reference so when clicked 
      //outside of the form and start new annotation the button shows up again
   }

   handleInput(field) {
      return (e) => {
         this.setState({ [ field ]: e.currentTarget.value })
      }

   }


   render() {
      // debugger
      return(
         <>
         {/* { comeback to this after annotations show up on track show
            this.props.showAnnoForm ? */}
            <form className="annotation-form">
               <textarea
                  className="add-annotation"
                  placeholder="Don't just put the lyrics in your own words - drop some knowledge"
                  onChange={this.handleInput('body')}
                  value={this.state.body}
                  />
               <button
                  className="add-annotation-btn"
                  onClick={this.handleSubmit}
                  >
                  Save
               </button>
            </form>

               {/* :

               <AnnotationShow 
                  // annotation = {}
               />
         } */}
         </>
      )
   }

}

export default withRouter(AnnotationForm);