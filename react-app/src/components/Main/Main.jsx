import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './main.css';
import Auth from '../Auth/Auth';
import Procted from '../Procted/Procted';
import Home from '../Home/Home';

const Main = () => {
  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/auth' element={ <Auth /> } />
          <Route path='/procted' element={ <Procted /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;