import { h, Component } from 'preact'

import R from 'ramda'

import ApiRequest from '../../../../lib/request.js'
import TopMenu from './top-menu.js'

const MENU = 'menu'

class Header extends Component {
  componentDidMount() {
    return ApiRequest.get(MENU, {params: {menuId: 2}})
      .then( response => this.setState(
        { topMenu: response.data }
      ) )
  }

  render() {
    if (this.state.topMenu)
      return h(
        TopMenu,
        { topMenu: R.path(['state', 'topMenu'], this) }
      )
    else
      return h('div', null, 'loading icon')
  }
}

export default Header
