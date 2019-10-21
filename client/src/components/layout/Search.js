import React, { useState } from 'react';

const Search = () => {
  const [formData, setFormData] = useState({
    pid: '',
    region: ''
  });

  return (
    <section id='searchbar'>
      <form>
        <input
          className='input-item'
          type='text'
          placeholder='Product ID'
          onChange={e => setFormData({ ...formData, pid: e.target.value })}
        />

        <select
          name='region'
          className='input-item'
          onChange={e => setFormData({ ...formData, region: e.target.value })}
        >
          <option value='' disabled selected>
            Region
          </option>
          <option value='.co.nz'>NZ</option>
          <option value='.com.au'>AU</option>
        </select>
        <button className='input-item'>Search</button>
      </form>
    </section>
  );
};

export default Search;
