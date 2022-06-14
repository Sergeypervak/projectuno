export function Post (props)  {
    const {name, eraser} = props
    return <h2 >{name} {<button onClick={eraser}>delete</button>}</h2> 

    
}