import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu.jsx";

function App() {
  return (
      <Router>
        <Toaster />
        <Menu />
        <Routes>

        </Routes>
      </Router>
  );
}

export default App;