import { toggled } from "../todos/actions";

const changeStatus = (todoId, status) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://fakedata-server.herokuapp.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          completed: !status,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const todo = await res.json();

    dispatch(toggled(todo.id));
  };
};

export default changeStatus;
