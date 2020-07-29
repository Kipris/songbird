import React from 'react';
import './Header.scss';
import logo from './sb_logo.svg';
import QuestionList from './QuestionList';

const Header = () => {
  return (
    <header>
      <div className="top-panel">
        <div className="logo">
          <img src={logo} alt="Songbird Logo" />
        </div>
        <h5>Score: </h5>
      </div>
      <QuestionList />
    </header>
  );
}
 
export default Header;