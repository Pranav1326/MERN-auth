import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>MERN Authentication</h1>
      <div className="links">
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/procted'>Procted</Link>
          <Link to='/auth'>Login</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;