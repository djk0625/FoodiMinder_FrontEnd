import { Route, Routes } from "react-router-dom";

import Login from "./view/Login";
import SignUp from "./view/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
};

export default App;