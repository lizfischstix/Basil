import React from 'react';
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

const Overview = () => {
  // Check if the user is logged in
  const isLoggedIn = Auth.loggedIn();

  // If not logged in, display a welcome message
  if (!isLoggedIn) {
    return (
      <>
        <div className="text-center">
          <h1>🌿 Basil 🌿</h1>
          <h3>Hello User!</h3>
          <p>Enjoy your life with the budget tracker</p>
        </div>
      </>
    );
  }

  // If logged in, fetch user data and display user-specific content
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching user data:", error);
    return <div>Error loading user data. Please try again.</div>;
  }

  const userInfo = data.me;

  return (
    <>
      <Header firstName={userInfo.firstName} />
      <p className="text-center">Enjoy your life with the budget tracker</p>
    </>
  );
};

const Header = ({ firstName }) => {
  return (
    <div className="text-center">
      <h1>🌿 Basil 🌿</h1>
      <h1>Hi, {`${firstName}`}</h1>
    </div>
  );
};

export default Overview;
