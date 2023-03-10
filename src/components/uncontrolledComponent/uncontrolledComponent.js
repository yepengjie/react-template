import React, {Component, createRef} from 'react';

class UncontrolledComponent extends Component {
    // 这个实例属性是可以自定义的 语义化即可
    msgRef = createRef()

    getValue = () => {
        // 通过msgRef获取input value的值
        console.log(this.msgRef.current.value);
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.msgRef}/>
                <button onClick={this.getValue}>点击获取输入框的值</button>
            </div>
        );
    }
}

export default UncontrolledComponent;
