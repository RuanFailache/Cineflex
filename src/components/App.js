import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Header from "./Header/Header";
import Poster from "./Poster/Poster";
import Showtimes from "./Showtimes/Showtimes";
import Seats from "./Seats/Seats";
import Success from "./Success/Success";

export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact >
                    <Poster />
                </Route>

                <Route path="/filme/:idFilme" exact >
                    <Showtimes />
                </Route>

                <Route path="/sessao/:idSessao" exact >
                    <Seats />
                </Route>

                <Route path="/sucesso" exact >
                    <Success />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}