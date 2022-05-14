import "./Game.css";

const Game = ({verifyLetter}) => {
    return (
        <div>
            <h1>Game</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={verifyLetter}>Finalizar jogo</button>
        </div>
    )
}

export default Game