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
    
    const CATEGORY_DESCRIPTION = [{
      route: 'latest/',
      param: moment().utcOffset(0, true).format("yyyy-MM-DD")
    },{
      route: 'news/category/',
      param: 1
    },{
      route: 'news/category/',
      param: 2
    },
    {
      route: 'news/category/',
      param: 3
    },
    {
      route: 'news/category/',
      param: 4
    },
    {
      route: 'news/category/',
      param: 5
    },
    {
      route: 'news/category/',
      param: 6
    }
    ];
    return dispatch => {
      dispatch(clearRepos())
  
      dispatch(loadingError(false))
  
      dispatch(loadingInProgress(true))
  
      fetch(`https://api.canillitapp.com/` + CATEGORY_DESCRIPTION[category].route + CATEGORY_DESCRIPTION[category].param)
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
  