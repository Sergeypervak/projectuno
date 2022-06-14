export function Post (props)  {
    const {id, name, eraser} = props
    return <h2 >{name} <button onClick= {() => eraser (id)}>delete</button></h2> 

    
}