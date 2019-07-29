import * as React from 'react'
import { Provider } from 'react-redux'
import { Main } from './screens/Main'
import { initStore } from './store/index'

const store = initStore()

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default App
