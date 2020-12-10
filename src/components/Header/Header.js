import './Header.css';
import data from '../../metal.json';

function Header() {
  return (
    <div className="Header">
      <h1>Ali Shah</h1>
      <p>FEW 1.2: Final Assessment</p>
      <p>Total bands: {data.length}</p>
    </div>
  );
}

export default Header;
