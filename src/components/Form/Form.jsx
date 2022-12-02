import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./Form.module.css";
import Button from "../Utils/Button";

const Form = ({
  setTransactions,
  setIncome,
  setExpense,
  income,
  expense,
  balance,
  transactions,
}) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  //*------------------------Save data to localStorage-----------------------------------

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("income", JSON.stringify(income));
    localStorage.setItem("expense", JSON.stringify(expense));
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [transactions, income, expense, balance]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTransactions((prev) => [{ name: text, amount: amount, id: uuidv4() }, ...prev]);
    +amount >= 0 ? setIncome((prev) => prev + +amount) : setExpense((prev) => prev + +amount);
    setText("");
    setAmount(0);
  };

  return (
    <section className={s.container}>
      <h3 className="title">Add new transaction</h3>
      <form className={s.form} onSubmit={submitHandler}>
        <label className={s.label}>
          <p className={s.text}>Text</p>
          <input
            className={s.input}
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label className={s.label}>
          <p className={s.text}>
            Amount <br />
            (negative-expense, positive-income)
          </p>
          <input
            type="number"
            className={s.input}
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <Button text="Add transaction" />
      </form>
    </section>
  );
};

export default Form;
