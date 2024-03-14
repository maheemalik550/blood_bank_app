import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { Router_App } from './React_Router/Router_App'
import './App.css'




 const App = () => {
  return (
    <Provider store={store}>
      <Router_App/>
    </Provider>
  )

}
export default App
