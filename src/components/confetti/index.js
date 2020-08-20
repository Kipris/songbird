import React from 'react';
import './confetti.scss';

const Confetti = () => {
  const c = new Array(501).fill(1);
  return (
    <>
      {c.map((_, i) => {
        const cl = `confetti-${i}`;
        return <div key={i} className={cl}></div>
      })}
    </>
  )
};

export default React.memo(Confetti);
