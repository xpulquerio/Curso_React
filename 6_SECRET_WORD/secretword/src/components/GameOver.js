import "./GameOver.css";

const GameOver = ({ retry }) => {
    return (
        <div>
            <h1>Game Over</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={retry}>Reiniciar</button>
        </div>
    )
}

export default GameOver