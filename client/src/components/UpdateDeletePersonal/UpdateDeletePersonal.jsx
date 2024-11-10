import { Input, Table, Button, Modal, Form, message } from "antd";
import { useState } from "react";
import { findEmployee } from "@services/findEmployee";
import { updateEmployee } from "@services/updateEmployee";
import { deleteEmployee } from "@services/deleteEmployee";
import PropTypes from "prop-types";

const { Search } = Input;

const UpdateDeletePersonal = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onSearch = async (employeeId) => {
    try {
      const employee = await findEmployee(employeeId);
      setEmployees(employee ? [employee] : []);
    } catch (error) {
      console.error(error);
      message.error("Empleado no encontrado");
      setEmployees([]);
    }
  };

  const showEditModal = (employee) => {
    setSelectedEmployee(employee);
    form.setFieldsValue({ ...employee, manager_id: employee.manager_id });
    setEditModalOpen(true);
  };

  const handleEdit = async (values) => {
    try {
      await updateEmployee(selectedEmployee.id, values);
      message.success("Empleado actualizado correctamente");
      setEditModalOpen(false);
      onSearch(selectedEmployee.id);
    } catch (error) {
      console.error(error);
      message.error("Error al actualizar el empleado");
    }
  };

  const showDeleteModal = (employee) => {
    setSelectedEmployee(employee);
    setDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await deleteEmployee(selectedEmployee.id);
      message.success("Empleado eliminado correctamente");
      setDeleteModalOpen(false);
      setEmployees(employees.filter((emp) => emp.id !== selectedEmployee.id));
    } catch (error) {
      console.error(error);
      message.error("Error al eliminar el empleado");
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Salario",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Cargo",
      dataIndex: "position",
      key: "position",
    },
    // {
    //   title: "Manager",
    //   dataIndex: "manager",
    //   key: "manager",
    // },
    {
      title: "ManagerId",
      dataIndex: "manager_id",
      key: "id",
    },
    {
      title: "Acciones",
      key: "actions",
      render: (_, employee) => (
        <>
          <Button onClick={() => showEditModal(employee)} type="link">
            Editar
          </Button>
          <Button onClick={() => showDeleteModal(employee)} type="link" danger>
            Eliminar
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="EmployeeManagementPage">
      <div className="search-container">
        <Search placeholder="Buscar por ID de empleado" onSearch={onSearch} />
      </div>

      <Table columns={columns} dataSource={employees} rowKey="id" />

      <Modal
        title="Editar Empleado"
        open={isEditModalOpen}
        onCancel={() => setEditModalOpen(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleEdit}>
          <Form.Item name="name" label="Nombre" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="salary" label="Salario" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="position" label="Cargo" rules={[{ required: true }]}>
            <Input />
            {/* </Form.Item>
          <Form.Item
            name="manager"
            label="Manager"
            rules={[{ required: true }]}
          >
            <Input /> */}
          </Form.Item>
          <Form.Item
            name="manager_id"
            label="Manager_id"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Eliminar Empleado"
        open={isDeleteModalOpen}
        onCancel={() => setDeleteModalOpen(false)}
        onOk={handleDelete}
        okText="Confirmar"
        okButtonProps={{ danger: true }}
        cancelText="Cancelar"
      >
        <p>¿Estás seguro de que deseas eliminar este empleado?</p>
      </Modal>
    </div>
  );
};

UpdateDeletePersonal.propTypes = {
  onIdChange: PropTypes.func.isRequired,
  reset: PropTypes.bool.isRequired,
  setReset: PropTypes.func.isRequired,
};

export default UpdateDeletePersonal;
