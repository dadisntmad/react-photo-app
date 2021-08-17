import React from 'react';

import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';

import logo from '../../assets/logo.svg';

import './index.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__left-side">
            <Link to="/">
              <img src={logo} alt="logo" width="85px" />
            </Link>
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
