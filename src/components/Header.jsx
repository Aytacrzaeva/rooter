import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Features from "./Features";
import Content from "./Content";
const Header = () => {
  return (
    <>
    <div className="navbar">
      <div className="navbar__items">
        <div className="navbar__left">
          <h2>imagine</h2>
          <h2>.</h2>
        </div>
        <div className="navbar__right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Testimonials</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Routes>

    <Route path="/" element={<Content />} />
    <Route path="/features" element={<Features />} />

        </Routes>

    </>
  );
};

export default Header;
