import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => {
    // 6 - Controlled Inputs
    // 3 - Gerenciamento de dados;
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [descricao, setDescricao] = useState (user ? user.descricao : '');
    const [role, setRole] = useState (user ? user.role : ' ');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault(); //Não recarrega a página depois de enviar o formulário
        console.log("Enviando o formulário");
        console.log (name, email, descricao, role);

        //Validação
        //Envio

        //7 - Limpar formulários!
        setName('');
        setEmail('');
        setDescricao('');
        setRole(' ');

    }

    return (
        <div>
            {/* Envio de Formulário */}
            {/* 1 - Croação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder="Digite seu nome aqui" onChange={handleName} value={name}/>
                </div>
                <div>
                    <label>
                        <span>E-mail</span>
                        {/* Simplificação de manipulação de State */}
                        <input type="email" name="email" placeholder="Digite seu email aqui" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    </label>
                </div>
                {/* 8 - textarea */}
                <div>
                    <label>
                        <span>Descrição</span>
                        {/* Simplificação de manipulação de State */}
                        <textarea type="textarea" name="descricao" placeholder="Digite a descrição aqui!" onChange={(e) => setDescricao(e.target.value)} value={descricao}></textarea>
                    </label>
                </div>
                {/* 9 - select */}
                <div>
                    <label>
                        <span>Função do sistema</span>
                        {/* Simplificação de manipulação de State */}
                        <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                            <option value="default"> </option>
                            <option value="user">Usuário</option>
                            <option value="editor">Editor</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </label>
                </div>
                <input type="submit" value="Enviar"/>
            </form>
        {name}
        {email}
        {descricao}
        </div>
    )
}

export default MyForm