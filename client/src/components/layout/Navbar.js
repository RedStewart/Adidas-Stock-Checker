import React from 'react';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <h1>Adicheck</h1>

      <ul>
        <li className='active'>
          <i class='fas fa-shoe-prints'></i> Adidas
        </li>
        <li>
          <i class='fas fa-shoe-prints'></i> Adidas
        </li>

        <li className='live'>
          <i class='fas fa-compact-disc'></i> Live Drop
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
