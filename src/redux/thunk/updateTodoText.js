import { updateText } from "../todos/actions";

const updateTodoText = (todoId, todoText) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://todo-api-7k5g.onrender.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          text: todoText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const todo = await res.json();

    dispatch(updateText(todo.id, todo.text));
  };
};

export default updateTodoText;
