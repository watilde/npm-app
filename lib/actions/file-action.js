import NpmDispatcher from '../dispatchers/npm-dispatcher'

const FileAction = {
  clickFile () {
    document.getElementById('file__pick').click()
  },
  changeFile () {
    var file = document.getElementById('file__pick').files[0]
    NpmDispatcher.dispatch({
      type: 'UPDATE_FILE',
      file
    })
  }
}
export default FileAction
