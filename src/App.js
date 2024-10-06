import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import Profile from "./profile";
import SignIn from "./signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
