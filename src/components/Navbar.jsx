import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [btnName, setBtnName] = useState("light");

  return (
    <div className="navbar">
      <h1>Logo</h1>
      <ul>
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/men" className="link">
          <li>Men</li>
        </Link>
        <Link to="/women" className="link">
          <li>women</li>
        </Link>
        <Link to="/kid" className="link">
          <li>kid</li>
        </Link>
        <Link to="/cart" className="link">
          <li>cart</li>
        </Link>

        <li>
          <button
            onClick={() => {
              const type = btnName === "light" ? "dark" : "light";
              setBtnName(type);
            }}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
