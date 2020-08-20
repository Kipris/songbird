import React from 'react';
import './header.scss';
import logo from '../../assets/images/sb_logo.svg';
import QuestionList from './question-list';

const Header = ({ score, currentGroupId }) => {
  return (
    <header className="header d-flex">
      <div className="top-panel">
        <div className="logo">
          <img src={logo} alt="Songbird Logo" />
        </div>
        <h5>Счет: {score}</h5>
      </div>
      <QuestionList currentGroupId={currentGroupId} />
    </header>
  );
}
 
export default React.memo(Header);