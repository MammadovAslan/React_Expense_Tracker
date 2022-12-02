import React from "react";
import s from "./Cashflow.module.css";

const Chachflow = ({ text, amount, classes }) => {
  return (
    <div className={s.cash_flow}>
      <h3 className={s.title}>{text}</h3>
      <p className={`${s.amount} ${classes}`}>{amount} $</p>
    </div>
  );
};

export default Chachflow;
