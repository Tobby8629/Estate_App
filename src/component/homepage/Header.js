import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Header() {
  const [menu, setmenu] = useState(true);
  const [display, setdisplay] = useState(true);
  const sidebar = () => {
    setmenu(!menu);
    setdisplay(!display);
  };
  return (
    <div className="header">
      <nav>
        <a href="/" className="logo">
          <img src={logo} alt="estate brand" />
        </a>
        <div className="menu" onClick={() => { sidebar(); }} onKeyDown={() => { sidebar(); }} role="button" tabIndex="0">
          {menu ? <i className="fa-solid fa-bars" /> : <i className="fa-solid fa-xmark" />}
        </div>
        <ul className={display ? 'hide' : 'show'}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/">landLords</Link>
          </li>
          <li>
            <Link to="/">tenants</Link>
          </li>
          <li>
            <Link to="/">contact</Link>
          </li>
        </ul>
      </nav>

      <main>
        <h2>
          The most affortable place to stay in the san franciso bay area
        </h2>
        <div className="frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.590504029577!2d3.4362668142967627!3d6.446589325842284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4ddb69b3003%3A0xb11a2513c4a40a19!2sBourdillon%20Rd%2C%20Ikoyi%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1675109215509!5m2!1sen!2sng"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map_frame"
          />
          <form action="">
            <select>
              <option value="">all types</option>
            </select>
            <select className="large">
              <option value="">neighbourhood</option>
            </select>
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>

      </main>
    </div>
  );
}

export default Header;
