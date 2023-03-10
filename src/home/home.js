import React, {Component} from 'react';
import Son from '../components/son/index'
// 父传子 props 函数
// 子传父 子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参
class Home extends Component {
    state = {
        list: [1, 2,3]
    }

    // 给子组件传个函数

    getSonMsg = ()=> {
        console.log('父组件方法')
    }
    render() {
        return (
            <div>
                <Son getSonMsg={this.getSonMsg}></Son>
            </div>
        );
    }
}

export default Home;
