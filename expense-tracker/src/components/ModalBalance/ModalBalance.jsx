import React, { useState } from "react";
import s from "../History/Modal/Modal.module.css";

const ModalBalance = ({ setToggelbalanceModal, setDefaultBalance }) => {
  const [value, setValue] = useState(0);

  const hideModal = (e) => {
    (e.target.classList.contains(s.modal) || e.target.classList.contains(s.close_modal)) &&
      setToggelbalanceModal(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setDefaultBalance(+value);
    setToggelbalanceModal(false);
  };

  return (
    <div className={s.modal} onClick={hideModal}>
      <form className={s.form_container} onSubmit={submitHandler}>
        <label>
          <p className={s.amount}>Enter default balance: </p>
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        </label>
        <button className={s.submit_button}>Submit</button>
        <div className={s.close_modal} onClick={hideModal}>
          X
        </div>
      </form>
    </div>
  );
};

export default ModalBalance;
