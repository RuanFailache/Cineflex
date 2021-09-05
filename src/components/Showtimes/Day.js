import styled from "styled-components";

import Showtime from "./Showtime";

export default function Day({ day }) {
  return (
    <li>
      <h3>
        {day.weekday} - {day.date}
      </h3>

      <Flex>
        {day.showtimes.map((showtime, key) => (
          <Showtime key={key} showtime={showtime} />
        ))}
      </Flex>
    </li>
  );
}

const Flex = styled.ul`
  display: flex;
  gap: 8px;

  li {
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: #e8833a;
    border-radius: 3px;
    width: 83px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    letter-spacing: 2%;
    color: white;
  }
`;
