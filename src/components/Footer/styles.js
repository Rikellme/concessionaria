import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: linear-gradient(to right, #1E00DA 0%, #0F006D 75%);
  & > .content {
    background-color: #1E00DA;
    color: white;
    

    & > .datas {
      width: 70%;
      margin: 0 auto;
      padding: 5em 0;

      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      font-size: .8em;

      .logo {
        width: 50%;
        min-width: 5em;

        *{
          fill: white;
        }
      }

      .informations {
        display: flex;
        gap: 10em;

        .links {
          display: flex;
          flex-direction: column;
          gap: 1em;

          a {
            transition: .2s;

            &:hover {
              filter: brightness(.8);
            }
          }



          .franqueado {
            color: ${({ theme }) => theme.colors.secondary};
          }

          .datas-group + .datas-group {
            margin-top: 1em;
          }

          small {
            display: block;
          }
        }

      }

      .social-medias {
        display: flex;
        flex-direction: column;
        gap: 1em;

        .links-group {
          display: flex;
          gap: .5em;

          a:nth-child(1) {
            padding-bottom: .2em;
          }

          a {
            background-color: ${({ theme }) => theme.colors.secondary};
            padding: .7em;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 8px;

            img {
              width: 1em;
            }
          }

        }
      }
    }



    & > .bottom-data {
      width: 95%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2em;
      padding-bottom: 2em;

      small {
        font-size: .6em;

        .evve:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .content {
      .datas {
        gap: 2em;
        font-size: .7em;
        .informations {
          display: flex;
          gap: .5em;
        }

        .social-medias {
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .content {
      .datas {
        width: 95%;
        margin: 0 auto;
        font-size: .7em;
        display: flex;
        flex-direction: column;
        gap: 4em;

        .informations {
          display: grid;
          gap: 2em;
        }

        .social-medias {
          justify-content: center;
          align-items: flex-start;
        }

        .logo {
          width: 25%;
        }

        .logo-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }  
      }
    }
  }
`;
