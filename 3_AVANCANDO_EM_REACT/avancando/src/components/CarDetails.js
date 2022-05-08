

const CarDetails = ({id, brand, color, km, newCar}) => { //Manter o mesmo nome do outro
    return (
        <div>
            <h2>Detalhes do carro</h2>
           {/* <ul>
                <li>Marca: {props.brand}</li>
                <li>KM: {props.km}</li>
                <li>Cor: {props.cor}</li>
            </ul>*/}
            <ul>
                
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
                <li>{newCar && ("Este carro é novo!")}</li>
            </ul>
        </div>
    )
}

export default CarDetails

