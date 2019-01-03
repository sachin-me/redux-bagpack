
const initState = {
  items: [],
  redo:[],
  redoArr: [],
  unpackArray: [],
  packArr: [],
  unpackSearchArr: []
}

function rootReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, {value: action.value, done: false}]
      }
      
    case "DELETE_ITEM": 
      let deletedItem = state.items.slice();
      deletedItem.splice(action.id, 1);
      return {
        ...state,
        items: deletedItem
      }
    
    case "UNDO_ITEM":
      let newArr = state.items.splice(state.items.length - 1, 1);
      return {
        ...state,
        items: [...state.items,...newArr],
        redoArr: [...state.redoArr, ...newArr],
      }

    case "REDO_ITEM":
      let newArr2 = state.redoArr.splice(state.redoArr.length - 1, 1);
      return {
        ...state,
        items: [...state.items, ...newArr2],
        redoArr: [...state.redoArr],
      }

    case "UNPACK_ARR": 
      state.items[action.id].done = !state.items[action.id].done;
      let packedArr = state.items.splice(action.id, 1);
      return {
        ...state,
        packArr: [...state.packArr, ...packedArr],
        items: [...state.items]
      }
     
    case "PACK_ARR":
      state.packArr[action.id].done = !state.packArr[action.id].done;
      let  unpackedArr = state.packArr.splice(action.id, 1);
      return {
        ...state,
        items: [...state.items, ...unpackedArr]
      }

    case "DELETE_PACKED": 
      let deletedPackItem = state.packArr.slice();
      deletedPackItem.splice(action.id, 1);
      return {
        ...state,
        packArr: deletedPackItem
      }

    case "UNPACKALL_PACKED":
      let unpackAll = state.packArr.map(v => {v.done = false; return v;});
      return {
        ...state,
        items: [...state.items, ...state.packArr],
        packArr : []
      }

    case "UNPACK_ITEM_SEARCH":
      let convertCase = action.e.target.value.toLowerCase();
      let matchItem = state.items.filter(v => v.value.toLowerCase().includes(convertCase));
      
      return {
        ...state,
        unpackSearchArr: matchItem
      }

    case "UNDO_PACKED":
    let undoPackItem = state.packArr.splice(state.packArr.length - 1, 1);

    return {
      ...state,
      packArr: [...state.packArr],
      items: [...state.items, ...undoPackItem],
    }

    default:
      return state;
  }
}

export default rootReducer;