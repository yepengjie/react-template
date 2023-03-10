import React, {Component} from 'react';


// 受控组件、非受控组件
class ControlledComponent extends Component {
    state = {
        message: 'this is message'
    };

    inputChange = (e)=> {
        console.log("事件触发了", e);
        this.setState({
            message: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.message} onChange={this.inputChange}/>
            </div>
        );
    };
}

export default ControlledComponent;
