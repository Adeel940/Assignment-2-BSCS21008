import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import Profile from "./profile";
import SignIn from "./signin";
import SignUp from "./signup";
import BlankPage from "./Blank";
import MainMenu from "./MainMenu"
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/Blank" element={<BlankPage/>} />
        <Route path="/menu" element={<MainMenu/>}/>
      </Routes>
    </Router>
  );
}

export default App;
