import { connect } from 'react-redux'
import RepoList from '../components/RepoList'
import { getRepos, clearRepos } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGet: (input) => dispatch(getRepos(ownProps.category)),
  onClear: () => dispatch(clearRepos())
})

const mapStateToProps = (state, ownProps) => ({
  repos: state.repos,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
  category: ownProps.category
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList)
