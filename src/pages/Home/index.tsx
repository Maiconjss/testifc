import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bem vindo a plataforma de colaboração BIM da A.Yoshii</h1>
      <Link to="/colaboration">
        <button> COLABORATION </button>
      </Link>
    </div>
  );
};

export default Home;
