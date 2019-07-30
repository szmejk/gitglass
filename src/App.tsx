import * as React from 'react'
import { Provider } from 'react-redux'
import { MainScreen } from './components/MainScreen'
import { initStore } from './store/index'
import { GlobalStyle } from './styles/global'
const store = initStore()

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <MainScreen />
  </Provider>
)

export default App
