import { Page, Title, Container } from "../style";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Day from "./Day";
import BottomBar from "../BottomBar";

export default function Showtimes() {
  const { idMovie } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idMovie}/showtimes`
      )
      .then((res) => setMovie({ ...res.data }));
  }, []);

  return (
    <Page>
      <Title weight="400" color="#293845">
        <h2>Selecione o horário</h2>
      </Title>

      {movie ? (
        <>
          <Container>
            <Days>
              {movie.days.map((day, key) => (
                <Day key={key} day={day} />
              ))}
            </Days>
          </Container>

          <BottomBar posterURL={movie.posterURL} title={movie.title}>
            <p>{movie.title}</p>
          </BottomBar>
        </>
      ) : null}
    </Page>
  );
}

const Days = styled.ul`
  margin-bottom: 117px;

  h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 2%;
    color: #293845;
  }
`;
