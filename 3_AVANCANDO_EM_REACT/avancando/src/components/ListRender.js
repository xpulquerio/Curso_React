import { useState } from 'react';
//rafce
const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Ewerson", age: 26},
        {id: 3, name: "João", age: 44},
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>

            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((users) => (
                    <li key={users.id}>{users.name} - {users.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender;