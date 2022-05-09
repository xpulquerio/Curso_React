import React from 'react'

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    }
}


const UserDetails = ({ nome, idade, profissao }) => {
    return (
        <div>
            <div><h5>Forma 1 de fazer:</h5>
                {maiorDeIdade(idade) && <div>{nome}, que é {profissao}, pode tirar habilitação!</div>}
            </div>

            <div>
                <h5>Forma 2 de fazer:</h5>
                <div>{nome}, que é {profissao}</div>
                {maiorDeIdade(idade) ? ("É maior de 18 anos!") : ("Nâo é maior de 18 anos!")}
            </div>

            
        </div>
    )
}

export default UserDetails