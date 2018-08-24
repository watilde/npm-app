import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootSaga from './sagas'
import * as rootReducer from './ducks'
import persistConfig from './config/persist'

export const history = createBrowserHistory()
export const configureStore = () => {
  const router = routerMiddleware(history)
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware, router]
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(
    connectRouter(history)(persistedReducer),
    compose(applyMiddleware(...middleware))
  )
  const persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
