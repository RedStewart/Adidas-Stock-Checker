import React, { useState } from 'react';

const Search = () => {
  const [formData, setFormData] = useState({
    pid: '',
    region: '.co.nz'
  });

  return (
    <section id='searchbar'>
      <form>
        <div className='form-item'>
          <h2>Product ID:</h2>
          <input
            className='input-item'
            type='text'
            placeholder='PID'
            onChange={e => setFormData({ ...formData, pid: e.target.value })}
          />
        </div>

        <select
          name='region'
          className='input-item'
          onChange={e => setFormData({ ...formData, region: e.target.value })}
        >
          <option value='.co.nz'>NZ</option>
          <option value='.com.au'>AU</option>
        </select>
        <button className='input-item'>Search</button>
      </form>
    </section>
  );
};

export default Search;
