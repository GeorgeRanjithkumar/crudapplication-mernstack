import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details';
import Adduser from './pages/Adduser';
function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/:id" element={<Details />} />
       <Route path="/adduser" element={<Adduser />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
