import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import addTodos from "../redux/thunk/addTodos";
import { allCompleted, clearCompleted } from "../redux/todos/actions";

export default function Header() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodos(input));
    setInput("");
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const completeTaskHandler = () => {
    dispatch(allCompleted());
  };

  const clearCompletedHandler = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={input}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={changeHandler}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={completeTaskHandler}
        >
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearCompletedHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
