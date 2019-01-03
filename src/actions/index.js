function addItem(value) {
  return {
    type: "ADD_ITEM",
    value
  }
}

function deleteItem(id) {
  return {
    type: "DELETE_ITEM",
    id
  }
}

function undoItem() {
  return {
    type: "UNDO_ITEM"
  }
}

function redoItem() {
  return {
    type: "REDO_ITEM"
  }
}

function unpackArr(id) {
  return {
    type: "UNPACK_ARR", id
  }
}

function packArrFun(id) {
  return {
    type: "PACK_ARR", id
  }
}

function deletePacked(id) {
  return {
    type: "DELETE_PACKED", id
  }
}

function unpackAllPacked() {
  return {
    type: "UNPACKALL_PACKED"
  }
}

function unpackItemSearch(e) {
  return {
    type: "UNPACK_ITEM_SEARCH", e
  }
}

function undoPacked() {
  return {
    type: "UNDO_PACKED"
  }
}

export {addItem, deleteItem, undoItem, redoItem, unpackArr, packArrFun, deletePacked, unpackAllPacked, unpackItemSearch, undoPacked}
