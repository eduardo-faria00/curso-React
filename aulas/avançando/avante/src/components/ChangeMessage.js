
const ChangeMessage = ({ set }) => {
    const message = ['Olá', 'Tudo bem?', 'Como vai?']
    return (
        <>
            <button onClick={() => set(message[0])}>1</button>
            <button onClick={() => set(message[1])}>2</button>
            <button onClick={() => set(message[2])}>3</button>
        </>
    )
}

export default ChangeMessage