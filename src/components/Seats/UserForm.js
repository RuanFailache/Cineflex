import { Form } from "./style-seat";

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function UserForm({ selectedSeats, info, setInfos }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [canChange, setCanChange] = useState(false);

  useEffect(() => {
    const regexCpf = new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);
    const seats = selectedSeats.map((seat) => seat.name);

    if (seats.length === 0 || name === "" || cpf === "" || !regexCpf.test(cpf))
      return;
    setCanChange(true);
  }, [name, cpf, selectedSeats]);

  function chooseSeats() {
    const regexCpf = new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);
    const seats = selectedSeats.map((seat) => seat.name);

    if (seats.length === 0) {
      alert("Selecione pelo menos um assento!");
      return;
    } else if (name === "") {
      alert("Preencha o seu nome!");
      return;
    } else if (cpf === "") {
      alert("Preencha o seu cpf!");
      return;
    } else if (!regexCpf.test(cpf)) {
      alert("Preencha o seu cpf no seguinte formato!\n'xxx.xxx.xxx-xx'");
      return;
    }

    setInfos({
      title: info.movie.title,
      date: info.day.date,
      hour: info.name,
      name,
      cpf,
      seats,
    });

    axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many",
      {
        ids: selectedSeats.map((seat) => seat.id),
        name,
        cpf,
      }
    );
  }

  return (
    <Form>
      <label>Nome do Comprador</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome"
      />

      <label>CPF do Comprador</label>
      <input
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Digite seu nome"
      />

      <Link to={canChange ? "/sucesso" : "#"} onClick={chooseSeats}>
        Reservar seu assento
      </Link>
    </Form>
  );
}
