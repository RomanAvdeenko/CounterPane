import React from 'react'
import ReactDOM from 'react-dom'
import CounterPane from './components/CounterPane'

ReactDOM.render(
  <React.StrictMode>
    <CounterPane />
    <CounterPane />
  </React.StrictMode>,
  document.querySelector('#root')
);