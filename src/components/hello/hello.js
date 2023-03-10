import React, {Component} from 'react';


class Hello extends Component {
    //1. 定义组件状态
    state = {
        // 在这里可以定义属性，全部都是当前组件的状态
        name: 'cp teacher'
    }

    clickHandler = ()=>{
        alert('类组件函数被触发了')
    }

    changeName = ()=> {
        // 3.修改state中的name
        // 注意:不可以直接做赋值修改 必须通过一个方法 setState 这个方法是通过继承得到
        this.setState({
            name: '牛逼'
        })
    }
    render() {
        // 2. 使用状态
        return (
            <div>
                {this.props.title}我是类组件
                当前name为:{this.state.name}
                <button onClick={this.changeName}>修改</button>
            </div>
        );
    }
}
export default Hello


// const clickHandler = (e,msg)=> {
//     // 阻止默认行为
//     e.preventDefault()
//     console.log('函数式组件被触发了',e, msg);
//
// }
//
//
// function Hello() {
//     return <div><a onClick={ (e) => clickHandler(e,'this is msg')} href="https://www.baidu.com/">百度</a></div>
// }
//
//
// export default Hello
