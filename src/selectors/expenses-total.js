// total selector getExpensesTotal
export default expenses => {
  return expenses && expenses.length > 0
    ? expenses.reduce(
        (acc, expense) => (expense.amount ? acc + expense.amount : 0),
        0
      )
    : 0;
};
