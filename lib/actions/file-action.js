import FileDispatcher from '../dispatchers/dispatcher'

const FileAction = {
  updateFile (file) {
    FileDispatcher.dispatch({
      type: 'UPDATE_FILE',
      file
    })
  }
}
export default FileAction
