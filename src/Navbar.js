import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>DISCOVER AI POWER => </h1>
      <div className="links">
        <Link to="/">INSIGHT</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: 'blue',
          borderRadius: '8px' 
        }}>INNOVATIONS</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
