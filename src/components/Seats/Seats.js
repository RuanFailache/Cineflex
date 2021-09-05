import { Page, Title, Container } from "../style";
import { Circle, Flex } from "./style-seat";
import Seat from "./Seat";
import UserForm from "./UserForm";
import BottomBar from "../BottomBar";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Seats({ setInfos }) {
  const { idSession } = useParams();
  const [info, setInfo] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSession}/seats`
      )
      .then((res) => {
        setInfo({ ...res.data });
      });
  }, []);

  return (
    <Page>
      <Title weight="400" color="#293845">
        <h2>Selecione o(s) assento(s)</h2>
      </Title>

      {info ? (
        <Container>
          <Flex>
            {info.seats.map((seat, key) => (
              <Seat
                key={key}
                seat={seat}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            ))}
          </Flex>

          <Flex>
            <li>
              <Circle color="#8DD7CF" border="#1AAE9E" />
              <p>Selecionado</p>
            </li>

            <li>
              <Circle color="#C3CFD9" border="#7B8B99" />
              <p>Disponível</p>
            </li>

            <li>
              <Circle color="#FBE192" border="#F7C52B" />
              <p>Indisponível</p>
            </li>
          </Flex>

          <UserForm
            selectedSeats={selectedSeats}
            info={info}
            setInfos={setInfos}
          />

          <BottomBar posterURL={info.movie.posterURL} title={info.movie.title}>
            <p>{info.movie.title}</p>
            <p>
              {info.day.weekday} - {info.name}
            </p>
          </BottomBar>
        </Container>
      ) : null}
    </Page>
  );
}
