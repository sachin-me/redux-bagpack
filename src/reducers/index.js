const initState = {
  items: [],
  unpackArr: [],
  packArr: []
}

function rootReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, {value: action.value, done: false}]
      }
      
  
    default:
      return state;
  }
}

export default rootReducer;