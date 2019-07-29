import * as React from 'react'
import { Provider } from 'react-redux'
import { MainScreen } from './screens/Main'
import { initStore } from './store/index'

const store = initStore()

const App = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
)

export default App
