import React from 'react';
import './button.scss';

const Button = ({ disabled, click, children }) => {
  return (
    <button
      type="button"
      onClick={click}
      className={["btn", disabled ? "" : "btn-success"].join(" ")}
      disabled={disabled}>{children}</button>
  );
}
 
export default React.memo(Button);
