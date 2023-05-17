import apiRequest from "./index";
import { Todo } from "types/todo.type";

const RESOURCE = "/todos";

export const getTodoList = async () => {
  try {
    const response = await apiRequest.get(`${RESOURCE}`);

    return response;
  } catch (error) {
    throw new Error("API getTodoList error");
  }
};

export const createTodo = async ({ title }: Pick<Todo, "title">) => {
  try {
    const response = await apiRequest.post(`${RESOURCE}`, { title });

    return response;
  } catch (error) {
    throw new Error("API createTodo error");
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await apiRequest.delete(`${RESOURCE}/${id}`);

    return response;
  } catch (error) {
    throw new Error("API deleteTodo error");
  }
};
