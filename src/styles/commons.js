import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  color: ${({ theme, color }) => color ?? theme.colors.secondary};
  font-size: ${({ size }) => `${size}px` ?? "1.5em"};
  line-height: 1.14em;
`;

export const Card = styled.div`
  padding: 2.5em 1.5em;
  text-align: start;
  display: grid;
  border-radius: 8px;
  background-color: ${({ theme, backgroundColor }) => backgroundColor ?? "white"};
  color: ${({ theme, color }) => color ?? theme.colors.primary};
  box-shadow: 0px 6px 16px 6px rgba(0,0,0,0.16);

  svg {
    max-width: 60px;
    height: auto;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 32px;
    line-height: 1.1em;
  }

  small {
    color: ${({ theme, color }) => color ?? "#707070"};
    margin: 2em 0;
    font-weight: 200;
  }
`;
