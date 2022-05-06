const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button> {/*Se colocar o parenteses em handleMyEvento(), ele ativa o evento assim que ler o elemento, por isso deixamos sem parenteses*/}
            </div>
        </div>
    );
};

export default Events;