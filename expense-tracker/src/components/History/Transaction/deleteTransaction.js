export const deleteTransaction = (
  transactions,
  id,
  setTransactions,
  amount,
  setIncome,
  setExpense
) => {
  +amount >= 0 ? setIncome((prev) => prev - +amount) : setExpense((prev) => prev - +amount);

  const arr = transactions.filter((el) => el.id !== id);
  setTransactions(arr);
};
