import {createStore} from 'redux'
import reducer from '../reducers'
// 创建一个初始化的state
var initState = {
    namessss: {
        name: 'Jack',
        picture: 'a.jpg'
    }
}

const store = createStore(reducer,initState)
export default store