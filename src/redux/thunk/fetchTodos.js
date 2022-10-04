import { loaded } from "../todos/actions";

const fetchTods = async (dispatch) => {
  const response = await fetch("https://fakedata-server.herokuapp.com/todos");
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchTods;
