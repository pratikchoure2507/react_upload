import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Style/Style.css';


function UserList() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data));
    }, []);

    const Deatils = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="UserList">
                <input
                    type="text"
                    placeholder="Search users by name"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <ul>
                    {Deatils.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default UserList;
