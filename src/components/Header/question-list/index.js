import React from 'react';
import './question-list.scss';

const QuestionList = ({currentGroupId}) => {
  return (
    <ul className="navigation d-flex">
      {["Разминка", "Воробьиные", "Лесные птицы", "Певчие птицы", "Хищные птицы", "Морские птицы"]
        .map((group, id) => (
          <li 
            key={id}
            className={id === currentGroupId ? "active" : ""}>
            {group}
          </li>
        ))}
    </ul>
  );
}
 
export default React.memo(QuestionList);
