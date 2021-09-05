import { Circle } from "./style-seat";

import { useState, useEffect } from "react";

export default function Seat({ seat, selectedSeats, setSelectedSeats }) {
  const [colors, setColors] = useState({});

  const free = { color: "#C3CFD9", border: "#7B8B99" };
  const busy = { color: "#FBE192", border: "#F7C52B" };
  const selected = { color: "#8DD7CF", border: "#1AAE9E" };

  useEffect(() => {
    if (seat.isAvailable) setColors({ ...free });
    else setColors({ ...busy });
  }, []);

  function selectSeat(e) {
    if (seat.isAvailable) {
      if (colors.color === free.color) {
        setColors({ ...selected });
        e.target.classList.add("selected");
      } else {
        setColors({ ...free });
        e.target.classList.remove("selected");
      }

      if (selectedSeats) {
        if (e.target.classList.contains("selected")) {
          setSelectedSeats([...selectedSeats, { ...seat }]);
        } else {
          let aux = selectedSeats.filter(
            (selSeat) => selSeat.name !== seat.name
          );
          setSelectedSeats([...aux]);
        }
      } else {
        setSelectedSeats([{ ...seat }]);
      }
    }
  }

  return (
    <li onClick={selectSeat}>
      <Circle color={colors.color} border={colors.border}>
        {seat.name}
      </Circle>
    </li>
  );
}
