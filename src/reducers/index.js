const initState = {
  items: [],
  undoArr: [],
  unpackArr: [],
  packArr: []
}

function rootReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, {value: action.value, done: false}]
      }
      
    case "DELETE_ITEM": 
      let deletedItem = state.items.slice();
      deletedItem.splice(action.id, 1);
      return {
        items: deletedItem
      }
      
    default:
      return state;
  }
}

export default rootReducer;