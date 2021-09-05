import { Page, Title, Container } from "../style";
import { Infos, ToHome } from "./style-success";

import { Link } from "react-router-dom";

export default function Success({ infos }) {
  const { title, date, hour, name, cpf, seats } = infos;

  return (
    <Page>
      <Title weight="700" color="#247A6B">
        <h2>
          Pedido feito
          <br /> com sucesso!
        </h2>
      </Title>

      <Container>
        <Infos>
          <h3>Filme e sessão</h3>
          <p>{title}</p>
          <p>
            {date} - {hour}
          </p>
        </Infos>

        <Infos>
          <h3>Ingressos</h3>
          <ul>
            {seats.map((seat) => (
              <li>
                <p>Assento {seat}</p>
              </li>
            ))}
          </ul>
        </Infos>

        <Infos>
          <h3>Comprador</h3>
          <p>{name}</p>
          <p>{cpf}</p>
        </Infos>
      </Container>

      <Link to="/">
        <ToHome>Voltar para a Home</ToHome>
      </Link>
    </Page>
  );
}
