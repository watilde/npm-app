import MainView from '../components/main.jsx'
import {Container} from 'flux/utils'
import FileAction from '../actions/file-action'
import FileStore from '../stores/file-store'

function getStores () {
  return [
    FileStore
  ]
}

function getState () {
  return {
    file: FileStore.getState(),
    onChangeFile: FileAction.changeFile,
    onClickFile: FileAction.clickFile
  }
}

export default Container.createFunctional(MainView, getStores, getState)
