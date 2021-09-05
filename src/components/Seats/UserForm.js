import { Form } from "./style-seat";

import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function UserForm({ selectedSeats }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const ids = selectedSeats.map((seat) => seat.id);

  function chooseSeats() {
    axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many",
      { ids, name, cpf }
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

      <Link to="/sucesso" onClick={chooseSeats}>
        Reservar seu assento
      </Link>
    </Form>
  );
}
