const TemplateExpression = () => {
    const name = 'Eduardo'
    const person = {
        age: 21,
        job: 'programador'
    }
    return (
        <>
            <p>Olá {name}, você atua como: {person.job}</p>
        </>
    )
}

export default TemplateExpression