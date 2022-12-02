import React from "react";
import s from "./Button.module.css";

const Button = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className={s.button}>
      {text}
    </button>
  );
};

export default Button;
