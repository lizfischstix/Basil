const Hello = ({ userInfo }) => {

let totalIncome = 0;

for(let i = 0; i < userInfo.incomes.length; i++) {
    totalIncome = userInfo.incomes[i].amount + totalIncome;
}

let totalExpense = 0;

for (let i = 0; i < userInfo.expenses.length; i++) {
  totalExpense = userInfo.expenses[i].amount + totalExpense;
}

const balance = totalIncome - totalExpense;

  return (
    <>
      <h2>Hi, {userInfo.firstName}!</h2>
      <h4>Balance: ${balance}</h4>
      <h5>Total Income: ${totalIncome}</h5>
      <h5>Total Expense: ${totalExpense}</h5>
    </>
  );
};

export default Hello;
