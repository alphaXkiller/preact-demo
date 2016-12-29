import Axios from 'axios'
import R from 'ramda'

Axios.defaults.baseURL = 'http://localhost/wp-json'


const PARAMS_REGEX      = /:[a-zA-Z]*/
const INDEX_AFTER_COLON = 1


const _param_list = R.match(PARAMS_REGEX)


const _requireParams = R.compose(R.not, R.isEmpty, _param_list)
  

const _parseUrlParams = R.curry( (url, params) => {
  const reduceFn = (acc, val) => R.compose(
    R.replace(val, R.__, url),
    R.prop(R.__, params),
    (val) => val.substr(INDEX_AFTER_COLON)
  )(val)
    

  return R.reduce(reduceFn, url, _param_list(url))
})


const parseIfRequireParams = R.curry( (url, params) => 
  R.when(
    _requireParams,
    _parseUrlParams(R.__, params),
  )(url)
)


const urlMap = {
  pages: '/wp/v2/pages',
  menus: '/wp-api-menus/v2/menus',
  menu: '/wp-api-menus/v2/menus/:menuId'
}


const apiRequest = {
  /**
   * @param {string} urlName - it must match the keys in urlMap
   * @param {object} params
   * @param {obejct} query
   **/
  get: (urlName, {params, query}) => {
    const url = urlMap[urlName]
    let parsedUrl = parseIfRequireParams(url)(params)

    return Axios.get(parsedUrl)
  }
}

export default apiRequest
