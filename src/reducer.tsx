export interface AppState {
  recipes: []
  isLoading: false
  isError: false
  singleRecipe: {}
}

export interface AppAction {
 type:string;
 payload:string | number;
}
export const appReducer = (state:AppState, action:AppAction)=>{
  switch(action.type){
    case 'START_LOADING':
     return {...state, isLoading:true};
    case 'GET_RECIPE':
     return {...state, recipes:action.payload}
  }
}