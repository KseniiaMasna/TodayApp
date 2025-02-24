import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

function App() {  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />                     
      </Routes>
    </Router>
  )
}

export default App
