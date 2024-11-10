import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logoamadeus from "../../assets/images/logoamadeus.png";
import "./SettingsPage.scss";
import Configuracion from "../../assets/images/Configuracion.png";
import Pagar from "../../assets/images/Pagar.png";
import regresar from "../../assets/images/regresar.png";
import Agregar from "../../assets/images/Agregar.png";

const SettingsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Verificar si estamos en una subpágina
  const isSubPage = location.pathname !== "/settings";

  return (
    <div>
      <header className="page__header">
        <Link to="/menu">
          <img className="logoamadeus" src={logoamadeus} alt="Logo Amadeus" />
        </Link>
      </header>
      <div className="settingsMenu">
        <h1>Configuraciones</h1>
        {isSubPage ? (
          <div className="mini-icons">
            <div onClick={() => navigate("/settings")}>
              <img className="regresar" src={regresar} alt="Inicio" />
              <p>Regresar</p>
            </div>
          </div>
        ) : (
          // Mostrar el menú principal si no estamos en una subpágina
          <div className="grid">
            <div
              className="menu-item"
              onClick={() => navigate("/settings/ExtraHoursSettings")}
            >
              <div id="imgagregar">
                <img src={Configuracion} alt="Engranage" />
              </div>
              <p>Párametros Horas Extra</p>
            </div>
            <div
              className="menu-item"
              onClick={() => navigate("/settings/PersonalSettings")}
            >
              <img src={Pagar} alt="Ícono de perfil con engranage" />
              <p>Ajustes Personal</p>
            </div>
            <div
              className="menu-item"
              onClick={() => navigate("/settings/UpdateDeletePersonal")}
            >
              <img src={Agregar} alt="ïcono de más (+)" />
              <p>Actualizar-Eliminar Personal</p>
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsPage;
