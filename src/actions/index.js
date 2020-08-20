import moment from "moment";

export const loadingError = bool => (
    {
      type: 'LOADING_ERROR',
      hasErrored: bool
    }
  )
  
  export const loadingInProgress = bool => (
    {
      type: 'LOADING_IN_PROGRESS',
      isLoading: bool
    }
  )
  
  export const loadingSuccess = repos => (
    {
      type: 'LOADING_SUCCESS',
      repos
    }
  )
  
  export const clearRepos = () => (
    {
      type: 'CLEAR_REPOS'
    }
  )
  
  export const getRepos = category => {
    return dispatch => {
      dispatch(clearRepos())
  
      dispatch(loadingError(false))
  
      dispatch(loadingInProgress(true))
  
      fetch(` https://api.canillitapp.com/news/category/` + category)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
  
          dispatch(loadingInProgress(false))
  
          return response
        })
        .then((response) => response.json())
        .then((repos) => dispatch(loadingSuccess(repos.slice(0,10))))
        .catch(() => dispatch(loadingError(true)))
    }
  }
  