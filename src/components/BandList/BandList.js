import { useState } from 'react';
import './BandList.css';
import Band from '../Band/Band.js';
import data from '../../metal.json';

function BandList() {
  const [query, setQuery] = useState('');

  let bands = data.filter(band => {
    const inTitle = band.band_name.toLowerCase().includes(query.toLowerCase());
    const inStyle = band.style.toLowerCase().includes(query.toLowerCase());
    return (inTitle || inStyle);
  });
  
  bands = bands.map(data => {
    return (
      <Band
        key={data.ID}
        band_name={data.band_name}
        formed={data.formed}
        origin={data.origin}
        fans={data.fans}
        split={data.split}
      />
    );
  });

  return (
    <div className="BandList">
      <div className="form">
        <form>
          <input
            value={query}
            placeholder="search"
            onChange={e => setQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="grid">
        {bands}
      </div>
    </div>
  );
}

export default BandList;
