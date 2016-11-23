import React from 'react'
import ReactDOM from 'react-dom'
import Window from './window'

document.title = 'React Desktop Playground'
document.documentElement.style.width = '100%'
document.documentElement.style.height = '100%'
document.body.style.width = '100%'
document.body.style.height = '100%'

document.body.innerHTML = `
  <div id="main" style="width: 100%; height: 100%;"></div>
`

ReactDOM.render(<Window/>, document.getElementById('main'))
