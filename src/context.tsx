import React, { useContext, useReducer } from 'react'
import { appReducer, AppState} from './reducer'

const url = 'https://forkify-api.herokuapp.com/api/v2/recipes'
const key = '78b50e84-cf51-49be-b811-6c91893ceca4'

const initialState:AppState = {
 isLoading: false,
 isError:false,
 recipes:[],
 singleRecipe:{},
}
const AppContext = React.createContext<AppState>(initialState)

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const fetchRecipes = async (query: string) => {
    dispatch({ type: 'START_LOADING' })
    try {
      const request = await fetch(`${url}?search=${query}&key=${key}`)
      const data = await request.json()
      dispatch({ type: 'GET_RECIPE', payload: data })
      dispatch({ type: 'STOP_LOADING' })
    } catch (err) {
      console.log(err)
    } finally {
      dispatch({ type: 'STOP_LOADING' })
    }
  }

  return (
    <AppContext.Provider value={{ ...state, fetchRecipes }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider, useGlobalContext }
