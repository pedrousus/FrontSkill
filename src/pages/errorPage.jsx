import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Header />
    <div id="error-page" className="error">
      <h1>Lo lamento la página que buscas no existe. Asegurate de escribir bien el link de la página que buscas.</h1>
      <a href="/">Volver a la página principal.</a>
      <p>
          <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </>
  );
}