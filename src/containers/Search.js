import { connect } from 'react-redux'
import { getRepos, clearRepos } from '../actions'
import SearchMenu from '../components/SearchMenu'

const mapStateToProps = (state, ownProps) => ({
  defaultUser: ownProps.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (input) => dispatch(getRepos(input)),
  onClear: () => dispatch(clearRepos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMenu)
