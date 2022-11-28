import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Modals from "./Components/Modal/Modal";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
        <Route path="/modals" element={<Modals />}></Route>
      </Routes>
    </div>
  );
}

export default App;
