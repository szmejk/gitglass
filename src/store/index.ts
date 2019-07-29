import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducer'
import { rootSaga } from './sagas'

let store: any = null

export const getStore = () => {
  if (!store) {
    store = initStore()
  }
  return store
}

export const initStore = () => {
  if (!store) {
    const sagaMiddleware = createSagaMiddleware()
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)
  }
  return store
}
