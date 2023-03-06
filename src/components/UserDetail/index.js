"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../context/UserData";
import Detail from "./Detail";

function UserDetail({ params }) {
  const { findUser } = useContext(UserDataContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const userValue = await findUser(params.id);
      setUsers(userValue);
    };
    loadData();
  }, []);

  return (
    <>
      <Detail userData={users} />
    </>
  );
}

export default UserDetail;
