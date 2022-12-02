import React from "react";
import s from "./Transaction.module.css";
import { deleteTransaction } from "./deleteTransaction";

const Transaction = ({
  name,
  amount,
  index,
  id,
  transactions,
  setTransactions,
  setIncome,
  setExpense,
  setToggle,
  setEditNum,
}) => {
  const showModal = () => {
    setEditNum(index);
    setToggle(true);
  };

  const status = +amount >= 0 ? s.income : s.expense;
  const amountRender = +amount >= 0 ? `+${amount}` : amount;
  return (
    <div className={`${s.transaction} ${status}`}>
      <div className={s.name}>{name}</div>
      <div className={s.amount}>{amountRender}</div>
      <button
        className={s.delete_button}
        onClick={() => {
          deleteTransaction(transactions, id, setTransactions, amount, setIncome, setExpense);
        }}
      >
        {" "}
        X
      </button>
      <button className={s.edit_button} onClick={showModal}>
        Edit
      </button>
    </div>
  );
};

export default Transaction;
