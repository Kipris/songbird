import React from 'react';
import './question-list.scss';

const QuestionList = () => {
  return (
    <nav className="navigation d-flex">
      <a href="#" className="active">Разминка</a>
      <a href="#">Воробьиные</a>
      <a href="#">Лесные птицы</a>
      <a href="#">Певчие птицы</a>
      <a href="#">Хищные птицы</a>
      <a href="#">Морские птицы</a>
    </nav>
  );
}
 
export default QuestionList;
