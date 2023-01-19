import { loaded } from "../todos/actions";

const fetchTods = async (dispatch) => {
  const response = await fetch("https://todo-api-7k5g.onrender.com/todos");
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchTods;
