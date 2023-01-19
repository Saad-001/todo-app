import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import changeColor from "../redux/thunk/changeColor";
import changeStatus from "../redux/thunk/changeStatus";
import deleteTodo from "../redux/thunk/deleteTodo";
import updateTodoText from "../redux/thunk/updateTodoText";

export default function Todo({ todo }) {
  const [updateBtn, setUpdateBtn] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const { text, id, completed, color } = todo;

  const handleStatusChange = (todoId) => {
    dispatch(changeStatus(todoId, completed));
  };

  const handleColorChange = (todoId, color) => {
    dispatch(changeColor(todoId, color));
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const mouseEnterHandler = () => {
    setUpdateBtn(true);
  };

  const mouseOutHandler = () => {
    setUpdateBtn(false);
  };

  const openInputHandler = () => {
    setOpenInput(!openInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodoText(id, inputText));
    setInputText("");
    setOpenInput(!openInput);
  };

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div
      className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-2 sm:space-x-4 border-b border-gray-400/20 last:border-0"
      onMouseOver={mouseEnterHandler}
      onMouseOut={mouseOutHandler}
    >
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleStatusChange(id)}
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${completed && "line-through"}`}>
        {openInput === true ? (
          <form
            onSubmit={submitHandler}
            className="w-full flex justify-between space-x-2"
          >
            <input
              type="text"
              className="w-full border border-green-300 focus:outline-none py-1 px-1 rounded"
              value={inputText}
              onChange={onChangeHandler}
            />
            <button className="text-xs bg-green-500 focus:ring focus:ring-green-200 text-white px-2 sm:px-3 py-0 sm:py-1 font-semibold rounded">
              submit
            </button>
          </form>
        ) : (
          <p className="text-xs sm:text-base">{text}</p>
        )}
      </div>
      {completed === false
        ? updateBtn && (
            <div className="cursor-pointer" onClick={openInputHandler}>
              <FiEdit />
            </div>
          )
        : ""}
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
          color === "green" && "bg-green-500"
        }`}
        onClick={() => handleColorChange(id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColorChange(id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColorChange(id, "red")}
      ></div>

      <img
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
