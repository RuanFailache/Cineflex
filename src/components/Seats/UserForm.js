import { useEffect, useState } from "react";
import axios from "axios";

export default function UserForm({ idSection, info, selectedSeats }) {
  const [seats, setSeats] = useState({ ...info });

  selectedSeats.forEach((selSeat) => {});

  return (
    <Form>
      <label>Nome do Comprador</label>
      <input placeholder="Digite seu nome" />

      <label>CPF do Comprador</label>
      <input placeholder="Digite seu nome" />

      <button>Reservar seu assento</button>
    </Form>
  );
}
