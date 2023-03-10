// 状态不能改变

import React, {Component} from 'react';

class Content extends Component {
    // 初始化
    // constructor() {
    //     super();
    //     // this.testFun = this.testFun.bind(this) // 强制转this指向(2015年写法)
    // }

    state = {
        count: 0,
        list: [1,2,3,4],
        person: {
            name: 'jack',
            age: 23
        }
    }

    // 直接修改不被允许
    changeCount = () => {
        this.setState({
            count: this.state.count + 1,
            // list: [...this.state.list, 5],
            person: {
                ...this.state.person,
                name: 'rose'
            },
            // 删除
           list: this.state.list.filter(item => item !== 2)
        })
    }

    // testFun () {
    //     console.log(this)
    // }


    render() {
        return (
           <>
               <ul>
                   {this.state.list.map(item => <li key={item}>{item}</li>)}
               </ul>
               {/*<button onClick={this.changeCount}>{this.state.count}click</button>*/}
               <button onClick={() => this.changeCount()}>{this.state.count}click</button>
               {/*<button onClick={this.testFun}>测试this指向</button>*/}
           </>
        );
    }
}

export default Content;
