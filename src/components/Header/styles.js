import NextLink from "next/link";
import styled from "styled-components";

export const Content = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #1E00DA 10%, #0F006D 100%);
  background: #f5f5f5;
  width: 100%;
  padding: 1.5em 0;
  margin: 0 auto;
  
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;

    img {
      width: 100px;
    }

    nav {
      
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin: 0;
        padding: 0;
  
        li {
          display: flex;
  
          button {
            background-color: ${({ page, theme }) => page == "Planos" || page == "Contato" ? "#FFBF01" : theme.colors.primary};
            border: none;
            padding: 1em;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .7em;
            font-size: small;
            line-height: normal;

            svg {
              width: 1.5em;
              height: 1.5em;
              * {
                fill: #fff;
              }
            }
  
            a {
              width: 100%;
              height: 100%;
              color: #fff;
            }
          }
        }

        > li.nav-close-btn {
            display: none;
          }
      }
    }

    .nav-btn {
      padding: 5px;
      cursor: pointer;
      background: ${({ theme }) => theme.colors.primary};
      border: none;
      outline: none;
      /* display: none; */
      /* opacity: 0; */
      display: none;
      align-items: center;
      justify-content: center;
      border-radius: 8px;

      svg {
        width: 2em;
        height: 2em;
        * {
          fill: #fff;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .content {
      width: 80%;
      .nav-btn {
        display: flex;
        opacity: 1;
      }

      nav > ul {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 3em;
        background: linear-gradient(to right, #1E00DA 10%, #0F006D 100%);
        background: ${({ page }) => page == "Planos" || page == "Contato" || page == "Politica-de-privacidade" ? "" : "white"};
        transition: .2s;
        transform: translateY(-100vh);

        > li {
          width: 80%;
          margin: 0 auto;

          > button.franqueado-button {
            padding: 1em .5em;
            gap: .5em;

            > a {
              font-size: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            svg {
              width: .8em;
              height: .8em;
            }
          }
        }

        > li.nav-close-btn {
          width: 80%;
          position: absolute;
          left: 10%;
          top: 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          /* position: absolute;
          top: 5%;
          left: 85%; */
        }

        > .login form {
          display: flex;
          gap: 1em;
          place-items: center;

          > input {
            width: 100%;
          }
        }
      }
  
      .responsive_nav > ul {
        transform: none;
        z-index: 10;
      }
    }
  }

`;

export const Link = styled(NextLink)`
  font-size: 12px;
  color: ${({ page, theme }) => page == "Planos" || page == "Contato" || page == "Politica-de-privacidade" ?  "white" : theme.colors.text_gray};
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.3s;
  &:active,
  &.active,
  &:hover {
    color: ${({ color }) => color};
  }

  @media (max-width: 1024px) {
    color: ${({ page, theme }) => page == "Planos" || page == "Contato" || page == "Politica-de-privacidade" ?  "white" : theme.colors.text_gray};
  }
`;
