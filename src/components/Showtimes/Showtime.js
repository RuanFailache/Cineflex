import { Link } from "react-router-dom";

export default function Showtime({ showtime }) {
  return (
    <li>
      <Link to="/">{showtime.name}</Link>
    </li>
  );
}
