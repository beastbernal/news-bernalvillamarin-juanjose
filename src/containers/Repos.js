import { connect } from 'react-redux'
import RepoList from '../components/RepoList'


const mapStateToProps = state => ({
  repos: state.repos,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
})

export default connect(
  mapStateToProps,
  null
)(RepoList)
