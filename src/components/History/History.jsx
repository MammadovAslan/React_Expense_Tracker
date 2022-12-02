import React, { useState } from "react";
import s from "./History.module.css";
import Modal from "./Modal/Modal";
import Transaction from "./Transaction/Transaction";

const History = ({ transactions, setTransactions, setIncome, setExpense }) => {
  const [toggle, setToggle] = useState(false);
  const [editNum, setEditNum] = useState(0);

  const showModal = toggle && (
    <Modal
      setToggle={setToggle}
      editNum={editNum}
      transText={transactions[editNum].name}
      transAmount={transactions[editNum].amount}
      transactions={transactions}
      setTransactions={setTransactions}
      setIncome={setIncome}
      setExpense={setExpense}
    />
  );

  return (
    <section className={s.history}>
      <h3 className="title">History</h3>
      <div className={s.transactions}>
        {transactions.map((el, id) => (
          <Transaction
            name={el.name}
            amount={el.amount}
            key={id}
            index={id}
            id={el.id}
            transactions={transactions}
            setTransactions={setTransactions}
            setIncome={setIncome}
            setExpense={setExpense}
            setToggle={setToggle}
            setEditNum={setEditNum}
          />
        ))}
        {showModal}
      </div>
    </section>
  );
};

export default History;
