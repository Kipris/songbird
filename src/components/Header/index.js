import React from 'react';
import './header.scss';
import logo from './sb_logo.svg';
import QuestionList from './question-list';

const Header = () => {
  return (
    <header className="header d-flex">
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