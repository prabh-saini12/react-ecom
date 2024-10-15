import { useState } from "react";
const Navbar = () => {
  const [btnName, setBtnName] = useState("light");

  return (
    <div className="navbar">
      <h1>Logo</h1>
      <ul>
        <li className="menu-items">Home</li>
        <li>Men</li>
        <li>women</li>
        <li>kids</li>
        <li>cart</li>
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
