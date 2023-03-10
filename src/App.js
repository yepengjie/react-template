import './app.css'
import Hello from './components/hello/hello'
import Content from "./components/content/content";
import ControlledComponent from "./components/controlledComponent/controlledComponent";
import UncontrolledComponent from "./components/uncontrolledComponent/uncontrolledComponent"

import "./index.css"

const name = '人员定位'
const getTitle = ()=> {
    return '金鸡滩'
}
const flag = true
const list = [
    '金鸡滩',
    "转龙湾",
    "营盘壕"
]

const title = '测试测试'

const getHtag = (type)=> {
    if(type === 1) {
        return <h1>this is h1</h1>
    }
    if(type === 1) {
        return <h2>this is h2</h2>
    }
    if(type === 1) {
        return <h3>this is h3</h3>
    }
}



function App() {
  return (
    <div className="App">
        {getTitle()}
        {name}
        {flag? '煤矿' : '公司'}
        <div>
            <ul>
                {list.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
        </div>
        <div>{getHtag(1)}</div>

        <div>
            <span className='name'>测试类型样式</span>
        </div>

        <Hello title={title}></Hello>
        <Content></Content>
        <ControlledComponent></ControlledComponent>
        <UncontrolledComponent></UncontrolledComponent>
    </div>
  );
}

export default App;
