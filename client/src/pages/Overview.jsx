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

  const userId = Auth.getUser()._id;

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { userId: userId },
  });
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>OVERVIEW</h1>
      <button onClick={logout}> Logout </button>
      <p>Hi, {`${data.me.firstName}`}</p>
      <p>You are logged in.</p>
    </>
  );
};

export default Overview;
