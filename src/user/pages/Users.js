import React from "react";
import UsersList from "./UsersList/UsersList";

const Users = () => {
    const USERS = [{
            id: "u1",
            image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1589&q=80",
            name: "Reilly",
            places: 10,
            email: "reilly@email.com",
        },
        {
            id: "u2",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
            name: "Maggie",
            places: 1,
            email: "maggie@email.com",
        },
        {
            id: "u3",
            image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1589&q=80",
            name: "Bailey",
            places: 4,
            email: "bailey@email.com",
        },
        {
            id: "u4",
            image: "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
            name: "Dakota",
            places: 2,
            email: "dakota@email.com",
        },
    ];

    return <UsersList items = { USERS }
    />;
};

export default Users;