import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { UPDATE_INCOME } from "../utils/mutations";
import { QUERY_INCOME } from "../utils/queries";
import { useParams } from "react-router-dom";

const UpdateIncome = () => {
  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }

  const { incomeId } = useParams();

  const { loading, data } = useQuery(QUERY_INCOME, { variables: { incomeId } });

  const [updateIncome, { error }] = useMutation(UPDATE_INCOME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData.entries());
    // Convert string to number
    formEntries.amount = +formEntries.amount;

    try {
      const { data } = await updateIncome({ variables: { ...formEntries, incomeId } });
    } catch (error) {
      console.error(error);
    }

    window.location.assign("/overview");
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  const incomeInfo = data.income;

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          defaultValue={incomeInfo.description}
          name="description"
        />
        <label htmlFor="amount">Amount:</label>
        <input type="text" defaultValue={incomeInfo.amount} name="amount" />
        <button type="submit">Update income</button>
      </form>
      {error && <div>{error.message}</div>}
    </>
  );
};

export default UpdateIncome;
