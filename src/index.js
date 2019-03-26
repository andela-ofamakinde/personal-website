import React from 'react'
import ReactDOM from 'react-dom'
import HomepageLayout from './components/Home/HomepageLayout'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

const App = () => {
  return (
    <HomepageLayout />
  )
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')     
);