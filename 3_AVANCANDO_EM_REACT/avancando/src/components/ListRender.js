import { useState } from 'react';
//rafce
const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);
    const [users, setUsers] = useState([
        { id: 0, name: "Matheus", age: 31 },
        { id: 1, name: "Ewerson", age: 26 },
        { id: 2, name: "João", age: 44 },
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 3);
        //console.log(randomNumber);

        setUsers(
            
            (prevUsers) => {
                //console.log(prevUsers)
                return prevUsers.filter(
                    (user) => randomNumber !== user.id
                )
            })
            //console.log(users)
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