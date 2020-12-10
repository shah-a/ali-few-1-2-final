import './Band.css';
import Like from '../Like/Like.js';

function Band(props) {
  const { band_name, formed, origin, fans, split } = props;

  if (split === "-") {
    return (
      <div className="Band">
        <h1>{band_name}</h1>
        <p>Formed: {formed}</p>
        <p>Origin: {origin}</p>
        <p>Fans: {(fans * 1000).toLocaleString('en')}</p>
        <p>Split: {split}</p>
        <Like />
      </div>
    );
  } else {
    return (
      <div className="Band">
        <h1>{band_name}</h1>
        <p>Formed: {formed}</p>
        <p>Origin: {origin}</p>
        <p>Fans: {(fans * 1000).toLocaleString('en')}</p>
        <p>Split: {split}</p>
      </div>
    );
  }
}

export default Band;
