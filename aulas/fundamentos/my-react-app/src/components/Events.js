const Events = () => {
    const handleMyEvent = (e) => {
        console.log('evento ativado')
    }

const renderSomeThing = (x) => {
    if(x) return <h1>renderizando isso</h1>
    else return <h1>pode ser isso também</h1>
}

    return(
        <>
            <>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </>
            <>
                <button onClick={() => console.log('disparou também')}>Aqui Também</button>
            </>
            {renderSomeThing(true)}
            {renderSomeThing(false)}
        </>
    )
}

export default Events