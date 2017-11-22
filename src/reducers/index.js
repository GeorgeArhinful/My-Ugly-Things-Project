let defaultState = {
  items: []
}

let mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        items: [
          ...state.items, {
            title: action.title,
            description: action.description,
            url: action.url
          }
        ]
      }
      case "REMOVE_POST":
      return{
      items:state.items.filter((item,index) => (index != action.index))
      }
    default:
      return state

  }
}
export default mainReducer
