import { Fragment } from "react";

import { createGlobalStyle } from "styled-components";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Poster from "./Poster/Poster";
import Showtimes from "./Showtimes/Showtimes";
import Seats from "./Seats/Seats";
import Success from "./Success/Success";

export default function App() {
  return (
    <Fragment>
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
            <Seats />
          </Route>

          <Route path="/sucesso" exact>
            <Success />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
}
`;
