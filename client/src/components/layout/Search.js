import React, { useState, useContext } from 'react';
import AdidasContext from '../../context/adidas/adidasContext';
const regionArr = require('../../assets/region.json');

const Search = () => {
  const [formData, setFormData] = useState({
    pid: '',
    region: ''
  });

  const adidasContext = useContext(AdidasContext);
  const { getAllProductInfo } = adidasContext;

  const onSubmit = e => {
    e.preventDefault();

    if (formData.pid === '' || formData.region === '') {
      console.log('PID is empty');
    } else {
      getAllProductInfo(formData.pid, formData.region);
    }
  };

  return (
    <section id='searchbar'>
      <form onSubmit={onSubmit}>
        <input
          className='input-item'
          type='text'
          placeholder='Product ID'
          onChange={e => setFormData({ ...formData, pid: e.target.value })}
        />

        <select
          name='region'
          className='input-item'
          defaultValue='Region'
          onChange={e =>
            setFormData({
              ...formData,
              region: e.target.options[e.target.selectedIndex].text
            })
          }
        >
          <option value='Region' disabled>
            Region
          </option>
          {regionArr.map(region => (
            <option value={region.domain}>{region.regionName}</option>
          ))}
        </select>
        <button className='input-item'>Search</button>
      </form>
    </section>
  );
};

export default Search;
