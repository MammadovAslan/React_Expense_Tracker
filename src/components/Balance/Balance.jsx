import React, { useState, useEffect } from "react";
import s from "./Balance.module.css";
import Cashflow from "./Cashflow/Cashflow";
import Button from "../Utils/Button";

const Balance = ({ income, expense, balance, setBalance, defaultBalance, setDefaultBalance }) => {
  const [toggleClean, setToggleClean] = useState(false);

  const cleanDefaultBalance = () => {
    setDefaultBalance(0);
    setToggleClean(false);
  };

  const cleanButton = toggleClean && (
    <Button text="Clean Default Balance" onclick={cleanDefaultBalance} />
  );

  useEffect(() => {
    setBalance(income + expense);
  }, [income, expense, balance]);

  useEffect(() => {
    defaultBalance !== 0 && setToggleClean(true);
  }, [defaultBalance]);

  const overall = defaultBalance !== 0 ? balance + defaultBalance : balance;

  return (
    <section className={s.balance}>
      <div className={s.header}>
        <div className={s.amount}>
          <h3 className={s.title}>your balance</h3>
          <p className={s.count}>{overall} $</p>
        </div>
        {cleanButton}
      </div>
      <div className={s.cash_flow}>
        <Cashflow text="income" amount={income} classes={s.income} />
        <Cashflow text="expense" amount={Math.abs(expense)} classes={s.expense} />
      </div>
    </section>
  );
};

export default Balance;
