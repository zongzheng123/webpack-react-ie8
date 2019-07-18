import hardware from './hardware'
import software from './software'
import user from './user'
import system from './system'
import { combineReducers } from 'redux'

export default combineReducers({
  ...user
})