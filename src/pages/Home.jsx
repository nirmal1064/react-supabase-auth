import React from "react";
import { useAuth } from "../context/AuthProvider";

const Home = () => {
  const { user } = useAuth();

  return (
    <div style={{ fontSize: "24px" }}>
      You are logged in and your email address is {user.email}
    </div>
  );
};

export default Home;
