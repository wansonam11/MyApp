import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { useCallback, useEffect, useState } from "react";
import QuizContainer from "./container/QuizContainer";
import Weather from "./components/weather/Weather";
import Categories from "./components/news/Categories";
import NewsList from "./components/news/NewsList";
import Map from "./components/map/Map";
import TodosContainer from "./container/TodosContainer";

function App() {
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState("all");
  const handleSelect = useCallback((category) => setCategory(category), []);

  //local save
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //INPUT
  const handleAdd = useCallback((text) => {
    setTodos((todos) =>
      todos.concat({
        id: Date.now(),
        text,
        checked: false,
      })
    );
  }, []);

  //CHECK
  const handleToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  //remove
  const handleRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  //update
  const handleChange = useCallback((id, text) => {
    if (text === "") {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }, []);

  return (
    <div>
      <ul id="gnb">
        <Link to="/">Main</Link>
        <Link to="/todolist">Todo List</Link>

        <Link to="/weather">Weather </Link>

        <Link to="/news">News</Link>

        <Link to="/map">Corona Map</Link>

        <Link to="/quiz">Quiz</Link>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodosContainer />} />
        <Route
          path="/news"
          element={
            <div>
              <Categories category={category} handleSelect={handleSelect} />
              <NewsList category={category} />
            </div>
          }
        />
        <Route path="/weather" element={<Weather />} />
        <Route path="/map" element={<Map />} />
        <Route path="/quiz" element={<QuizContainer />} />
      </Routes>
    </div>
  );
}

export default App;
