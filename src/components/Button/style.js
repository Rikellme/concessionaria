import styled from "styled-components";

export const Content = styled.button`
  background-color: ${({ theme, color }) => color ?? theme.colors.primary};
  height: 4em;
  width: 7em;
  text-align: center;
  font-weight: bold;
  font-size: small;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    filter: brightness(0.8);
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
