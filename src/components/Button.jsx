import React from "react";

function Button({ children, type, onClick }) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
