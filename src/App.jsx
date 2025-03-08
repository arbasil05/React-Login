import Login from "./Login-Page/Login";
import './App.css'
import Signup from "./SignUp-Page/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App