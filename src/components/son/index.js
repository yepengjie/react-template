function Son(props) {
    const {getSonMsg} = props
    return (
        <div>
            <span>this is Son</span>
            <button onClick={() => getSonMsg('这是来自于子组件')}>传递</button>
        </div>
    )
}
export default Son
