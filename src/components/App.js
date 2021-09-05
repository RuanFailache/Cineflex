import { createGlobalStyle } from "styled-components";

import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import Reset from "./reset";
import Header from "./Header/Header";
import Poster from "./Poster/Poster";
import Showtimes from "./Showtimes/Showtimes";
import Seats from "./Seats/Seats";
import Success from "./Success/Success";

export default function App() {
  const [infos, setInfos] = useState({});
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Reset />
      <GlobalStyle />

      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Poster />
          </Route>

          <Route path="/filme/:idMovie" exact>
            <Showtimes />
          </Route>

          <Route path="/sessao/:idSession" exact>
            <Seats setInfos={setInfos} />
          </Route>

          <Route path="/sucesso" exact>
            <Success infos={infos} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`

  * {
      box-sizing: border-box;
  }

  body {
      font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
