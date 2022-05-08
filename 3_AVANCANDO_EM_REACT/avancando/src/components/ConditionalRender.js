import { useState } from 'react'
const CondicionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("Matheus");

    return (
        <div>
            <h1>Isso será exibido</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            <h3>If ternário</h3>
            {name !== "João" ? (
                <div>
                    <p>O nome é {name}</p>
                </div>
            ) : (<div><p>O nome é {name}</p></div>)}
            <button onClick={() => setName("João")}>Clica aqui</button>
        </div>
    )
}

export default CondicionalRender