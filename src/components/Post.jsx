export function Post (props)  {
    const {krot, name} = props
    return <h2 onClick={krot}>{name}</h2> 

    
}