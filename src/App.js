import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import Profile from "./profile";
import SignIn from "./signin";
import SignUp from "./signup";
import BlankPage from "./Blank";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/Blank" element={<BlankPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
