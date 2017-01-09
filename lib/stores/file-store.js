const fs = window.require('fs') // hack to use fs module
import Immutable from 'immutable'
import {ReduceStore} from 'flux/utils'
import NpmDispatcher from '../dispatchers/npm-dispatcher'

const File = Immutable.Record({
  path: '',
  valid: false,
  value: ''
})

class FileStore extends ReduceStore {
  constructor () {
    super(NpmDispatcher)
  }

  getInitialState () {
    return new File()
  }

  reduce (state, action) {
    switch (action.type) {
      case 'UPDATE_FILE':
        if (!action.file) return state
        state = state.set('path', action.file.path)
        state = state.set('valid', true)
        state = state.set('value', JSON.parse(fs.readFileSync(action.file.path, 'utf8')))
        return state
      default:
        return state
    }
  }
}

export default new FileStore()
