var mangReducer = (state = ["Android", "iOS", "MacOS"], action) =>{
  switch (action.type) {
    case 'ADD_MANG':
          return [...state, action.item];
        break;
  case 'DELETE_MANG':
        return state.filter((e, i) => i!= action.index);
      break;
    default:
    return state;
  }
}

module.exports = mangReducer;
