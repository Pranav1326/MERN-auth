import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>MERN Authentication</h1>
      <div className="links">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/procted'>Procted</Link>
          </li>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;