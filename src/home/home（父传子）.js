import React, {Component} from 'react';
import Son from '../components/funComponents/index'

class Home extends Component {
    //1. 定义组件状态
    state = {
        // 在这里可以定义属性，全部都是当前组件的状态
        list: [1, 2, 3, 4, 5]
    }

    setMsg = () => {
        console.log('传值了传值了')
    }

    render() {
        return (
            <div>
                首页
                <Son list={this.state.list} setMsg={this.setMsg} child={<span>this is span</span>}></Son>
            </div>
        );
    }
}

export default Home;
