import { useRouteError } from "react-router-dom";
import Header from '../components/Header/index';
import Nav from '../components/Nav/index';
import Footer from "../components/Footer/index";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    // <div id="error-page">
    <>
      <Header />
      <Nav />
        <h1>Oops...Nothing to budget here!</h1>
        <br />
        <i>Page {error.statusText || error.message}</i>
        <br />
      <Footer />
      </>
  );
}