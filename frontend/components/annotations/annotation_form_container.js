import { connect } from 'react-redux';
import { createAnnotation } from '../../actions/annotation_actions';
import AnnotationForm from './annotation_form';

// const mapStateToProps = (state, ownProps) => ({
//    annotation: state.entities.annotations
// })

const mapDispatchToProps = dispatch => ({
   createAnnotation: annotation => dispatch(createAnnotation(annotation)),
   // createAnnotation: annotation = annotation => dispatch(createAnnotation(annotation)),
});

export default connect(null, mapDispatchToProps)(AnnotationForm);
// export default connect(mapStateToProps, mapDispatchToProps)(AnnotationForm);