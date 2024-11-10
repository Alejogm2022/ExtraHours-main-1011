import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import Link from React Router
import "./PayExtraHoursPage.scss";
import { PayExtraHours } from "../components/PayExtraHours/PayExtraHours";
import logoamadeus from "../../../client/src/assets/images/logoamadeus.png"; // Import logo images

const PayExtraHoursPage = () => {
  return (
    <>
      <header className="page__header">
      <Link to="/menu">
            <img className="logoamadeus" src={logoamadeus} alt="Logo Amadeus" />
          </Link>
      </header>

      <h2>Pagar horas extra</h2>
      <PayExtraHours />
    </>
  );
};

export default PayExtraHoursPage;
