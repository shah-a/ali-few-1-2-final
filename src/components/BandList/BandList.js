import './BandList.css';
import Band from '../Band/Band.js';
import data from '../../metal.json';

const bands = data.map(data => {
  return (
    <Band
      key={data.ID}
      band_name={data.band_name}
      formed={data.formed}
      origin={data.origin}
      fans={data.fans}
    />
  );
});

function BandList() {
  return (
    <div className="BandList">
      {bands}
    </div>
  );
}

export default BandList;
