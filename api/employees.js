import express from "express";
const router = express.Router();
export default router;

import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "#db/queries/employees";

router.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});

router.post("/", async (req, res) => {
  const employee = req.body;
  if (!employee || Object.keys(employee).length === 0) {
    return res.sendStatus(400);
  }
  const { name, birthday, salary } = employee;
  if (!name || !birthday || !salary) {
    return res.sendStatus(400);
  }
  const createdEmployee = await createEmployee(employee);
  res.status(201).send(createdEmployee);
});

router.get("/:id", async (req, res) => {
  const employee = await getEmployee(req.params.id);
  if (!employee) {
    return res.sendStatus(404);
  }
  res.send(employee);
});

router.delete("/:id", async (req, res) => {
  const employee = await deleteEmployee(req.params.id);
  if (!employee) {
    return res.sendStatus(404);
  }
  res.sendStatus(204);
});

router.put("/:id", async (req, res) => {
  const employee = req.body;
  if (!employee || Object.keys(employee).length === 0) {
    return res.sendStatus(400);
  }
  const { name, birthday, salary } = employee;
  if (!name || !birthday || !salary) {
    return res.sendStatus(400);
  }
  const existingEmployee = await getEmployee(req.params.id);
  if (!existingEmployee) {
    return res.sendStatus(404);
  }
  const updatedEmployee = await updateEmployee({
    id: req.params.id,
    name,
    birthday,
    salary,
  });
  res.status(200).send(updatedEmployee);
});
