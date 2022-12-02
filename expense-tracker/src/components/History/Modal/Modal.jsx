import React, { useState } from "react";
import s from "./Modal.module.css";

const Modal = ({
  setToggle,
  editNum,
  transText,
  transAmount,
  transactions,
  setTransactions,
  setIncome,
  setExpense,
}) => {
  const [text, setText] = useState(transText ? transText : "");
  const [amount, setAmount] = useState(transAmount ? transAmount : 0);

  const hideModal = (e) => {
    (e.target.classList.contains(s.modal) || e.target.classList.contains(s.close_modal)) &&
      setToggle(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const arr = transactions.map((el, id) => {
      if (id === editNum) {
        if (+amount >= 0 && +el.amount >= 0) {
          +el.amount > +amount
            ? setIncome((prev) => prev - (+el.amount - +amount))
            : setIncome((prev) => prev + (+amount - +el.amount));
        } else if (+amount < 0 && +el.amount < 0) {
          +el.amount > +amount
            ? setExpense((prev) => prev - (+el.amount - +amount))
            : setExpense((prev) => prev + (+amount - +el.amount));
        }

        if (+el.amount >= 0 && amount < 0) {
          setIncome((prev) => prev - +el.amount);
          setExpense((prev) => prev + +amount);
        } else if (+el.amount < 0 && amount >= 0) {
          setIncome((prev) => prev + +amount);
          setExpense((prev) => prev - +el.amount);
        }

        return { name: text, amount: amount, id: el.id };
      }
      return el;
    });

    setTransactions(arr);
    setToggle(false);
  };

  return (
    <div className={s.modal} onClick={hideModal}>
      <form className={s.form_container} onSubmit={submitHandler}>
        <label>
          <p className={s.text}>Text:</p>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <label>
          <p className={s.amount}>Amount: </p>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <button className={s.submit_button}>Edit</button>
        <div className={s.close_modal} onClick={hideModal}>
          X
        </div>
      </form>
    </div>
  );
};

export default Modal;
