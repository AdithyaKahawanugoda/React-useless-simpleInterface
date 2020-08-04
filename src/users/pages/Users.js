import React from "react";
import "./Users.css";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Adithya Kahawanugoda",
      image:
        "https://images.unsplash.com/photo-1596206640422-4d1ac13b5e2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      places: 7,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
