import client from "../api";

export const fetchAll = () => client.get("/api/todos"); //

export const insertTodo = (text) => client.post("/api/todos", { text });

export const deleteTodo = (id) => client.delete(`/api/todos/${id}`);

export const updateTodo = (id, text) =>
  client.patch("/api/todos", { id, text });

export const toggleTodo = (id) => client.post("/api/todos", { id });
