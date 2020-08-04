import React from 'react';
import './button.scss';

const Button = ({ disabled, click }) => {
  return (
    <button
      type="button"
      onClick={click}
      className={["btn", disabled ? "" : "btn-success"].join(" ")}
      disabled={disabled}>Next level</button>
  );
}
 
export default React.memo(Button);
