import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

const Overview = () => {
  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const addIncome = (event) => {
    event.preventDefault();
    window.location.assign('/income');
  };

  const updateIncome = (event, incomeId) => {
    event.preventDefault();
    window.location.assign(`/income/${incomeId}/update`);
  }

  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  const userInfo = data.me;

  return (
    <>
      <button onClick={logout}> Logout </button>
      <h1>Hi, {`${userInfo.firstName}`}</h1>
      <h2>Incomes</h2>
      <button onClick={addIncome}> Add Income </button>
      {userInfo.incomes.map((income) => (
        <div key={income._id}>
          <p>Description: {`${income.description}`}</p>
          <p>Amount: ${`${income.amount}`}</p>
          <button onClick={(event) => updateIncome(event, income._id)}>Edit</button>
          <button>Delete</button>
        </div>
      ))}
      <h2>Expenses</h2>
      {userInfo.expenses.map((expense) => (
        <div key={expense._id}>
          <p>Description: {`${expense.description}`}</p>
          <p>Amount: ${`${expense.amount}`}</p>
        </div>
      ))}
    </>
  );
};

export default Overview;
