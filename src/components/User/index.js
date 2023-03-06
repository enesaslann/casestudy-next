"use client";
import React, { useContext } from "react";
import { UserDataContext } from "../../context/UserData";
import Card from "./Card";
import SchemaScript from "./SchemaScript";

function Index() {
  const { UserData } = useContext(UserDataContext);

  return (
    <>
      {[]
        .concat(UserData)
        .sort((a, b) => (a.score < b.score ? 1 : -1))
        .map((item) => {
          return (
            <div key={item.id}>
              <SchemaScript logo={item.image} keyId={item.id}/>
              <Card entry={item} />
            </div>
          );
        })}
    </>
  );
}

export default Index;
