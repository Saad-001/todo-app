import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CompletedTodos from "./components/CompletedTodos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  const [completedTodos, setCompletedTodos] = useState([]);
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const completedTodoList = todos.filter((todo) => {
      if (todo.completed === true) {
        return true;
      }

      return false;
    });

    setCompletedTodos(completedTodoList);
  }, [todos]);

  return (
    <div className="h-screen bg-blue-100">
      <Navbar />
      <div
        className={`grid ${
          completedTodos.length > 0 ? "h-auto" : "h-full"
        } gap-y-6 place-items-center px-6 font-sans`}
      >
        <div
          className={`w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white ${
            completedTodos.length > 0 ? "mt-20" : "mt-0"
          }`}
        >
          <Header />

          <hr className="mt-4" />

          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
        {completedTodos.length > 0 ? <CompletedTodos /> : ""}
      </div>
    </div>
  );
}

export default App;
