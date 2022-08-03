const Challenge = () => { 
    let x = 2
    let y = 3
    return (
        <>
            <p>valor de X é '{x}' e o valor de Y é '{y}'</p>
            <button onClick={()=> console.log(x+y)}>Somar</button>
        </>
    )
}

export default Challenge