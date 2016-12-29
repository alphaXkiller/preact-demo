import { h, Component } from 'preact'
import Header from './components/header/handler.js'


class App extends Component {
  render() {
    return h(
      'div', null, h(Header) 
    )
  }
}

export default App
