import styled from "styled-components";

export default styled.button`
  --color: rgb(0, 140, 255);
  all: unset;
  padding: 10px 20px;
  background-color: var(--color);
  border-radius: 10px;
  box-shadow: 0 0 25px var(--color);
  transition: box-shadow 0.5s;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 8px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 5px var(--color), 0 0 25px var(--color),
      0 0 50px var(--color), 0 0 100px var(--color);
  }
`;