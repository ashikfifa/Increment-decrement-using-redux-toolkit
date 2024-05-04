import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import CounterPage from "./page/counter/CounterPage";
import TodoPage from "./page/todo/TodoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
