import express from "express";
import { validateData } from "../middleware/validateData.js";
import { todoValidateSchema } from "../validators/todoValidate.js";
import { createTodo } from "../controllers/createTodo.js";
import { getAllTodo } from "../controllers/getAllTodo.js";
import { getTodoById } from "../controllers/getTodoById.js";
import { updateTodo } from "../controllers/updateTodo.js";
import { deleteTodo } from "../controllers/deleteTodo.js";
const todoRoute = express.Router();

todoRoute.post("/create", validateData(todoValidateSchema), createTodo); // http://localhost:8001/todo/create
todoRoute.get("/getAll", getAllTodo);   //http://localhost:8001/getAll
todoRoute.get("/getById/:id", getTodoById);
todoRoute.put("/update/:id",validateData(todoValidateSchema), updateTodo);
todoRoute.delete("/delete/:id", deleteTodo);//http://localhost:8001/todo/delete/${todoId}

export default todoRoute;
