const packageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_PACKAGE_PATH':
      return {
        ...state,
        path: action.payload
      }
    case 'LOAD_PACKAGE':
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export default packageReducer
