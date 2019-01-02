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

export {addItem, deleteItem}
