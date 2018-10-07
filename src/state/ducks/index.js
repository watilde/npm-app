import { combineReducers } from 'redux'
import packageReducer from './package'

const rootReducer = combineReducers({
  package: packageReducer
})

export default rootReducer
