"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import mePhoto from "../asset/me.png";

export const UserDataContext = createContext();

export function apollo() {
  return new ApolloClient({
    uri: "http://api.enuygun.menesaslan.net/graphql",
    cache: new InMemoryCache(),
  });
}

export async function getStaticProps() {
  const client = apollo();
  const { data } = await client.query({
    query: gql`
      query {
        users {
          id
          name
          title
          image
          score
        }
      }
    `,
  });
  return JSON.parse(JSON.stringify(data));
}

export async function findUser(userid) {
  const client = apollo();
  const { data } = await client.query({
    query: gql`
      query {
        user(id: ${userid}) {
          name
          lastName
          title
          image
          score
          email
          phone
        }
      }
    `,
  });
  return JSON.parse(JSON.stringify(data.user));
}

export const UserDataProvider = ({ children }) => {
  const [UserData, setUserData] = useState([
    {
      id: 1,
      name: "Enes Aslan",
      title: "Full Stack Developer",
      image: mePhoto,
      score: 2,
    },
  ]);

  useEffect(() => {
    const promise = getStaticProps();
    promise
      .then((data) => {
        setUserData(() => data.users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const scoreUpdate = (id, key) => {
    const clone_data = [...UserData];
    const val = clone_data.findIndex((entry) => entry.id === id);
    clone_data[val].score =
      key === "plus"
        ? clone_data[val].score + 1
        : clone_data[val].score > 0
        ? clone_data[val].score - 1
        : clone_data[val].score;
    setUserData(() => clone_data);
  };

  const values = { UserData, setUserData, scoreUpdate, findUser };

  return (
    <UserDataContext.Provider value={values}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error(
      "useUserData hook must be call inside UserDataContext component"
    );
  }
  return context;
};
