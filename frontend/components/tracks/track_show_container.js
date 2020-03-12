import { connect } from 'react-redux';
import { fetchTrack, updateTrack } from '../../actions/track_actions';
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({ track: state.entities.tracks[ownProps.match.params.trackId] })
}

const mapDispatchToProps = dispatch => ({
  fetchTrack: trackId => dispatch(fetchTrack(trackId)),
  updateTrack: updatedTrack => dispatch(updateTrack(updatedTrack))
})

export default connect(mapStateToProps,mapDispatchToProps)(TrackShow)