import { render } from 'react-dom'
import App from './App'
import './style/global.scss'

const container = document.createElement('div')
document.body.appendChild(container)

render(<App />, container)
