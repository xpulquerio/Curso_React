//Comentários normais

//Components
import MyComponent from "./MyComponent";

const FirstComponent = () => {
    //Comentários normais

    /*Comentários em paragrafos*/

    return (
        <div>
            <b>Meu Primeiro Componente</b>
            <p className="Teste">Meu Texto</p>
            {/*Criando Comentário com JSX*/}
            <MyComponent/>
        </div>
    ); 
};

export default FirstComponent;