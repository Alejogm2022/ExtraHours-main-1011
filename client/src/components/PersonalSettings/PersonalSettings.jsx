import { useState } from "react";
import { addEmployee } from "@services/addEmployee";

export const PersonalSettings = () => {
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    position: "",
    salary: "",
    manager: "",
    managerId: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEmployeeChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitNewEmployee = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await addEmployee(newEmployee);
      alert("Empleado agregado exitosamente");
      setNewEmployee({
        id: "",
        name: "",
        position: "",
        salary: "",
        manager: "",
        managerId: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitNewEmployee}>
      <h2>Agregar Nuevo Empleado</h2>
      <div>
        <label htmlFor="id">id</label>
        <input
          type="number"
          id="id"
          name="id"
          value={newEmployee.id}
          onChange={handleEmployeeChange}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newEmployee.name}
          onChange={handleEmployeeChange}
          required
        />
      </div>
      <div>
        <label htmlFor="position">Posición</label>
        <input
          type="text"
          id="position"
          name="position"
          value={newEmployee.position}
          onChange={handleEmployeeChange}
          required
        />
      </div>
      <div>
        <label htmlFor="salary">Salario</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={newEmployee.salary}
          onChange={handleEmployeeChange}
          required
        />
      </div>
      <div>
        <label htmlFor="manager">Manager</label>
        <input
          type="text"
          id="manager"
          name="manager"
          value={newEmployee.manager}
          onChange={handleEmployeeChange}
          required
        />
      </div>
      <div>
        <label htmlFor="managerId">Manager ID</label>
        <input
          type="number"
          id="managerId"
          name="managerId"
          value={newEmployee.managerId}
          onChange={handleEmployeeChange}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Agregando..." : "Agregar Empleado"}
      </button>
      {error && <p>Error: {error}</p>}
    </form>
  );
};
