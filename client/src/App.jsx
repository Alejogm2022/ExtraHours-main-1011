import "./App.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExtraHoursMenu from "./components/ExtraHoursMenu";
import LoginPage from "./pages/LoginPage";
import ReportsPage from "./pages/ReportsPage";
import ExtraHoursSettingsPage from "./pages/Settings/ExtraHoursSettingsPage";
import { PersonalSettings } from "./components/PersonalSettings/PersonalSettings";
import UpdateDeletePersonal from "./components/UpdateDeletePersonal/UpdateDeletePersonal";
import ApprovePage from "./pages/ApprovePage";
import AddExtrahour from "./pages/AddExtrahour";
import PayExtraHoursPage from "./pages/PayExtraHoursPage";
import DeleteExtrahour from "./pages/DeleteExtrahour";
import { AuthProvider } from "./utils/AuthContext";
import { ConfigProvider } from "./utils/ConfigProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import SettingsPage from "./pages/Settings/SettingsPage";

function App() {
  return (
    <AuthProvider>
      <ConfigProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/menu" element={<ExtraHoursMenu />} />
            <Route
              path="/add"
              element={
                <ProtectedRoute
                  allowedRoles={["empleado", "manager", "superusuario"]}
                  element={<AddExtrahour />}
                />
              }
            />
            <Route
              path="/reports"
              element={
                <ProtectedRoute
                  allowedRoles={["manager", "superusuario"]}
                  element={<ReportsPage />}
                />
              }
            />
            <Route
              path="/approve-payroll"
              element={
                <ProtectedRoute
                  allowedRoles={["manager", "superusuario"]}
                  element={<ApprovePage />}
                />
              }
            />
            <Route
              path="/update"
              element={
                <ProtectedRoute
                  allowedRoles={["superusuario"]}
                  element={<PayExtraHoursPage />}
                />
              }
            />
            <Route
              path="/delete"
              element={
                <ProtectedRoute
                  allowedRoles={["superusuario"]}
                  element={<DeleteExtrahour />}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute
                  allowedRoles={["superusuario"]}
                  element={<SettingsPage />}
                />
              }
            >
              <Route
                path="ExtraHoursSettings"
                element={<ExtraHoursSettingsPage />}
              />
              <Route path="PersonalSettings" element={<PersonalSettings />} />
              <Route
                path="UpdateDeletePersonal"
                element={<UpdateDeletePersonal />}
              />
            </Route>
          </Routes>
        </Router>
      </ConfigProvider>
    </AuthProvider>
  );
}

export default App;
