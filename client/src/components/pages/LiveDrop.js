import React from 'react';
const regionArr = require('../../assets/region.json');

const LiveDrop = () => {
  return (
    <section className='main-container'>
      <h2>Live Drop Page</h2>

      <form onSubmit={e => e.preventDefault()}>
        <h3>Monitor Live Drop</h3>
        <label htmlFor='region'>Region</label>
        <select name='region' className='input-item' defaultValue='Region'>
          {regionArr.map(region => (
            <option value={region.domain}>{region.regionName}</option>
          ))}
        </select>
        <button className='input-item'>Start</button>
      </form>
    </section>
  );
};

export default LiveDrop;
