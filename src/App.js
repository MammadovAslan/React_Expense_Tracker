import React, { useState, useEffect } from "react";
import Balance from "./components/Balance/Balance";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import History from "./components/History/History";
import ModalBalance from "./components/ModalBalance/ModalBalance";

const App = () => {
  const arr = JSON.parse(localStorage.getItem("transactions")) || [];
  const [transactions, setTransactions] = useState(arr);

  //*-------Main states : Transactions, Balance, Default Balance(modal), Income, Expense--------

  const savedIncome = JSON.parse(localStorage.getItem("income")) || 0;
  const savedExpense = JSON.parse(localStorage.getItem("expense")) || 0;
  const savedBalance = JSON.parse(localStorage.getItem("balance")) || 0;
  const savedDefaultBalance = JSON.parse(localStorage.getItem("defaultBalance")) || 0;

  const [income, setIncome] = useState(savedIncome);
  const [expense, setExpense] = useState(savedExpense);
  const [balance, setBalance] = useState(savedBalance);
  const [defaultBalance, setDefaultBalance] = useState(savedDefaultBalance);

  const [toggleBalanceModal, setToggelbalanceModal] = useState(true);

  //*------------------------Save Default balance to localStorage-----------------------------------
  useEffect(() => {
    localStorage.setItem("defaultBalance", JSON.stringify(defaultBalance));
  }, [defaultBalance]);

  useEffect(() => {
    balance !== 0 || defaultBalance !== 0
      ? setToggelbalanceModal(false)
      : setToggelbalanceModal(true);
  }, []);

  //*------------------------Default balance Modal window-----------------------------------

  const modal = toggleBalanceModal && (
    <ModalBalance
      setToggelbalanceModal={setToggelbalanceModal}
      setDefaultBalance={setDefaultBalance}
    />
  );

  return (
    <div className="wrapper">
      <Header />
      <Balance
        income={income}
        expense={expense}
        balance={balance}
        setBalance={setBalance}
        defaultBalance={defaultBalance}
        setDefaultBalance={setDefaultBalance}
      />
      <History
        transactions={transactions}
        setTransactions={setTransactions}
        setIncome={setIncome}
        setExpense={setExpense}
      />
      <Form
        setTransactions={setTransactions}
        setIncome={setIncome}
        setExpense={setExpense}
        income={income}
        expense={expense}
        balance={balance}
        transactions={transactions}
      />
      {modal}
    </div>
  );
};

export default App;
