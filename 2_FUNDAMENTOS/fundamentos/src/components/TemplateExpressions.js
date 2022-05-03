const TemplateExpressions = () => {
    const data = {
        age: 31,
        job: "Programmer",
    }
    const name = "Ewerson";

    return (
        <div>
            <b>Componente: Template Expressions</b><br></br>
            Olá {name}, tudo bem ? <br></br>
            Você atua como {data.job}<br></br>
            {4+4}<br></br>
            {console.log("JFX React")}
        </div>
    );
};

export default TemplateExpressions;