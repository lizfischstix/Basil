import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_INCOME } from "../utils/mutations";

const Income = () => {
  const [addUser, { error }] = useMutation(ADD_INCOME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData.entries());
    // Convert string to number
    formEntries.amount = +formEntries.amount;

    try {
      const { data } = await addUser({ variables: { ...formEntries } });
    } catch (error) {
      console.error(error);
    }

    window.location.assign("/overview");
  };

  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="description">Description:</label>
        <input type="text" placeholder="Description" name="description" />
        <label htmlFor="amount">Amount:</label>
        <input type="text" placeholder="$$$" name="amount" />
        <button type="submit">Add income</button>
      </form>
      {error && <div>{error.message}</div>}
    </>
  );
};

export default Income;
