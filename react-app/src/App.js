import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
