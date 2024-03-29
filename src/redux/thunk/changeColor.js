import { colorSelected } from "../todos/actions";

const changeColor = (todoId, color) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://todo-api-7k5g.onrender.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          color: color,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const todo = await res.json();
    console.log(todo);

    dispatch(colorSelected(todo.id, todo.color));
  };
};

export default changeColor;
