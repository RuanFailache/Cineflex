import styled from "styled-components";

export default function Movie({ movie }) {
  const { posterURL, title } = movie;

  return (
    <Item>
      <img src={posterURL} alt={title} />
    </Item>
  );
}

const Item = styled.li`
  width: 145px;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`;
