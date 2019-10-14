import React from "react";

function Input({ type, value }) {
  return <input maxLength={20} type={type} value={value} />;
}

export default Input;
