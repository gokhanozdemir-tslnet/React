"use client";
import React, { useEffect, useState } from "react";


type User = {
    id: string;
    name: string;
    username: string;
    email: string;
};

type UserList = Array<User>;

const Initial_State: UserList = Array<User>();

const HomeComponent: React.FC = () => {
    const [users, setUsers] = useState<UserList>([]);
    const [filteredUsers, setfilteredUser] = useState<UserList>(Initial_State);
    const [filterStr, setfilterStr] = useState<string>("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setUsers(users));
    }, []);


    useEffect(() => {
        setfilteredUser(
            users.filter((user) => user.name.toLowerCase().includes(filterStr))
        );
    }, [users, filterStr]);




    const onSearchChange: any = (event: React.FormEvent<HTMLInputElement>) => {
        const newValue: string = event.currentTarget.value;
        setfilterStr(event.currentTarget.value.toLowerCase());
    };

    return <div>
        Home Component
        <div className="container">
            <div className="row">
                React
                <div className="col-md-12">Search</div>
                <div className="col-md-12">
                    <input style={{ background: "red" }}
                        type="search"
                        className="form-control"
                        placeholder="Search Text"
                        onChange={onSearchChange}
                    ></input>
                </div>
                <div className="col-md-12">
                    {filteredUsers.map((user) => (
                        <div key={user.id}>{user.name}</div>
                    ))}
                </div>
            </div>
        </div>
    </div>;
};

export default HomeComponent;