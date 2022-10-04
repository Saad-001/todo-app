import { added } from "../todos/actions";

const addTodos = (todoText) => {
  return async (dispatch) => {
    const res = await fetch("https://fakedata-server.herokuapp.com/todos", {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        color: "",
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const todo = await res.json();
    console.log(todo);

    dispatch(added(todo.text));
  };
};

export default addTodos;
