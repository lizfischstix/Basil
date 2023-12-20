import { useRouteError } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="errorBox">
        <h1>Oops...Nothing to budget here!</h1>
        <br />
        <i>Page {error.statusText || error.message}</i>
       <br />
       <strong> Let's go  <a href="/"><Button variant="contained" color="success">
          HOME
        </Button></a><>!</></strong>
    </div>
    </div >
  );
}