import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <h1>Adicheck</h1>

      <ul>
        <li>
          <NavLink exact to='/' activeClassName='nav-active'>
            <i className='fas fa-cubes'></i> Adidas
          </NavLink>
        </li>

        <li>
          <NavLink exact to='/LiveDrop' activeClassName='nav-active'>
            <i className='fas fa-compact-disc'></i> Live Drop
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
