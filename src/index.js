import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore, history } from './state/store'
import App from './views/App'

const { store, persistor } = configureStore()

render(
  <AppContainer>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App history={history} />
      </PersistGate>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
