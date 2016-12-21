import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils'
import NpmDispatcher from '../dispatchers/npm-dispatcher'

class FileStore extends ReduceStore {
  constructor () {
    super(NpmDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case 'UPDATE_FILE':
        if (!action.file) return state
        return state.set(0, new Immutable.Record({
          file: action.file
        }))
      default:
        return state
    }
  }
}

export default new FileStore()
