import { connect } from 'react-redux';
import { fetchAnnotation, updateAnnotation, deleteAnnotation, createAnnotation } from '../../actions/annotation_actions';
import AnnotationShow from './annotation_show';

const mapStateToProps = (state, ownProps) => {
  
  return ({
    // annotations: state.entities.annotations[ownProps.match.params.annotationId],
    currentUser: state.session.currentUser,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchAnnotation: () => dispatch(fetchAnnotation()),
  updateAnnotation: () => dispatch(updateAnnotation()),
  deleteAnnotation: () => dispatch(deleteAnnotation()),
  createAnnotation: annotation => dispatch(createAnnotation(annotation))
})

export default connect(mapStateToProps,mapDispatchToProps)(AnnotationShow);