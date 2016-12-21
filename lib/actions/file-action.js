import NpmDispatcher from '../dispatchers/npm-dispatcher'

const FileAction = {
  updateFile (file) {
    NpmDispatcher.dispatch({
      type: 'UPDATE_FILE',
      file
    })
  }
}
export default FileAction
