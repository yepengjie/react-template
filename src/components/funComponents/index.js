// function Son (props) {
//     console.log(props)
//
//     const {list, child, setMsg} = props
//     return (
//         <div>
//             <ul>{list.map((item)=><li key={item}>名称：{item}</li>)}</ul>
//             <p>{child}</p>
//             <button onClick={setMsg}>触发传值的函数</button>
//         </div>
//     )
// }


function Son ({list, child, setMsg}) {
    return (
        <div>
            <ul>{list.map((item)=><li key={item}>名称：{item}</li>)}</ul>
            <p>{child}</p>
            <button onClick={setMsg}>触发传值的函数</button>
        </div>
    )
}

export default Son
