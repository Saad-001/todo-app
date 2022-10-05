import { updateText } from "../todos/actions";

const updateTodoText = (todoId, todoText) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://fakedata-server.herokuapp.com/todos/${todoId}`,
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
