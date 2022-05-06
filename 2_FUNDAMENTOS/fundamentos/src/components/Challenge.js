const Challenge = () => {
    var numero1 = 10;
    var numero2 = 20;

    function somaValores(){
        console.log(numero1 + numero2);
    }
    
    return (
        <div>
            <p>{numero1}</p>
            <p>{numero2}</p>
            <button onClick = {somaValores}>Clique aqui</button>

        </div>
    );
}

export default Challenge;