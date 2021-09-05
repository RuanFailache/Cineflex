import { Page, Title, Container } from "../style";

import Movie from "./Movie";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Poster() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies")
      .then((res) => setMovies([...res.data]));
  }, []);

  return (
    <Page>
      <Title weight="400" color="#293845">
        <h2>Selecione o filme</h2>
      </Title>

      <Container>
        <Flex>
          {movies
            ? movies.map((movie, key) => (
                <Link to={"/filme/" + movie.id}>
                  <Movie key={key} movie={movie} />
                </Link>
              ))
            : null}
        </Flex>
      </Container>
    </Page>
  );
}

const Flex = styled.ul`
  display: flex;
  flex-flow: wrap row;
  gap: 15px 30px;
  margin-bottom: 30px;
`;
