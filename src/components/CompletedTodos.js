import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const CompletedTodos = () => {
  const [completedTodos, setCompletedTodos] = useState([]);
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const completedList = todos.filter((todo) => {
      if (todo.completed === true) {
        return true;
      }

      return false;
    });

    setCompletedTodos(completedList);
  }, [todos]);
  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
      <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"'>
        {completedTodos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default CompletedTodos;
