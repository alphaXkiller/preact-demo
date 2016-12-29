import { h, Component } from 'preact'
import R from 'ramda'

const _renderItems = R.map( (item) =>
  h('div', null, item.title) 
)

class TopMenu extends Component {
  render(props) {
    const items = R.path(['topMenu', 'items'], props)
    console.log(props, items)
    return h(
      'div',
      null,
      _renderItems(items)
    )
  }
}

export default TopMenu
