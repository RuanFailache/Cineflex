import { Link } from "react-router-dom";

export default function Showtime({ showtime }) {
  const { id, name } = showtime;

  return (
    <Link to={"/sessao/" + id}>
      <li>{name}</li>
    </Link>
  );
}
