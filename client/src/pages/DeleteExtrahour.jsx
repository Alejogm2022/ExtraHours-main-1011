import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import Link from React Router
import { UpdateAndDelete } from "../components/UpdateAndDelete/UpdateAndDelete";
import "./DeleteExtrahour.scss";
import logoamadeus from "../../../client/src/assets/images/logoamadeus.png"; // Import logo images

const DeleteExtrahour = () => {
  return (
    <>
      <div>
        <header className="page__header">
        <Link to="/menu">
            <img className="logoamadeus" src={logoamadeus} alt="Logo Amadeus" />
          </Link>
        </header>
        <h2>Actualizar - Eliminar horas extra</h2>
        <UpdateAndDelete />
      </div>
    </>
  );
};

export default DeleteExtrahour;
