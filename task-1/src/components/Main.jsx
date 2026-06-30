// src/components/Main.jsx
import React from "react";
import Card from "./Card";
import users from "../data/users";

const Main = () => {
  return (
    <main className="flex-grow flex flex-wrap gap-6 justify-center p-10">
      {users.map((user, index) => (
        <Card
          key={index}
          name={user.name}
          role={user.role}
          image={user.image}
          projects={user.projects}
          followers={user.followers}
          rating={user.rating}
        />
      ))}
    </main>
  );
};

export default Main;
