import {Wang,Zhang} from '../action' //引用两个静态变量

//结合 state  与 action 生成新的state
export default(state,action)=>{
    switch (action.type){
        case Wang:
            return {
                namessss: {
                    name: action.namessss.name, // 使用action携带的新name
                    picture: state.namessss.picture  // 不需要修改，使用旧state的值
                },
            }
        case Zhang:
            return {
                namessss: {
                    name: action.namessss.name, // 使用action携带的新name
                    picture: action.namessss.picture  // 不需要修改，使用旧state的值
                },
            }
        default:
            return state
    }
}