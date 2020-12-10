import './MetalMeta.css';
import data from '../../metal.json';

function MetalMeta() {
  return (
    <div className="MetalMeta">
      <p>Total bands: {data.length}</p>
    </div>
  );
}

export default MetalMeta;
