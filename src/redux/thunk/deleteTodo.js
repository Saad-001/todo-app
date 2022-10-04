import { deleted } from "../todos/actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://fakedata-server.herokuapp.com/todos/${todoId}`,
      {
        method: "DELETE",
      }
    );

    const todo = await res.json();
    console.log(todo);

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
