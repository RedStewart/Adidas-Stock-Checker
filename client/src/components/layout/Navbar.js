import React from 'react';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <h1>Adicheck</h1>

      <ul>
        <li className='active'>
          <i className='fas fa-cubes'></i> Adidas
        </li>

        <li className='live'>
          <i className='fas fa-compact-disc'></i> Live Drop
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
