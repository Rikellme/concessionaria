import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;

export const OurServices = styled.div`
  margin-top: 10em;

  .flex {
    width: 70%;
    max-width: 1200px;
    margin: 0 auto;
    gap: 12em;
    margin-bottom: 2em;

    h1 {
      font-size: clamp(1.5em, 3vw, 4em);
      color: #014945;
    }

     p{
      flex: 1;
      color: #707070;
      font-size: clamp(14px,2vw,18px);
     }
  }
  
  .container-image {
    position: relative;

    img {
      width: 100%;
      height: 30em;
      object-fit: cover;
      object-position: top;
    }

    svg {
      position: absolute;
      right: 20%;
      top: 2%;
      width: 26em;
      * {
        fill: #014945b8;
      }
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    .flex {
      display: grid;
      gap: 1em;

    }
    
    .container-image {
      svg {
      width: 50%;
    }
    }
  }

`;

export const ExploreOurServices = styled.div`
  width: 70%;
  margin: 15em auto 0;

  .hipper-title {
    text-align: center;
    font-size: clamp(1.5em, 3vw, 4em);
    color: #014945;
    margin-bottom: 1em;
    margin-top: 0;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .card {
      position: relative;
      padding: 0 1.5em;
      height: 370px;
      display: grid;
      width: 32%;
      border: none;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      /* justify-content: space-around; */

      .group-informations {
        display: flex;
        flex-direction: column;
      }

      h1 {
        font-size: clamp(1.2em, 2vw, 2em);
        font-weight: 400;
        line-height: 1.14;
      }

      small {
        margin: 2em 0;
        font-weight: 200;
        font-size: small;

        ul {
          padding-left: 1.3em;
        }
      }

      .arrow {
        position: absolute;
        bottom: 5%;
          * {
            fill: ${({ theme }) => theme.colors.secondary};
          }
      }
    }

    .card.icon {
      justify-content: center;
    }

    .card:nth-child(2) {
      border-radius: 8px 8px 0 0;
    }

    .card:nth-child(5) {
      border-radius: 0 0 8px 8px;
    }



    .primary {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;

      .responsive-image {
        svg {
          * {
            fill: ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }

    .secondary {
      background-color: #f5f5f5;
      color: #707070;
    }

    .responsive-image {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 1em;
      margin-top: 2em;

      svg {
        g {
          clip-path: url("");
          * {
          }
        }
      }
    }

    .card:nth-child(6) {
      .responsive-image {
        /* svg {
          height: 3em;
        } */
      }
    }

    .icon {
      svg {
        width: 100%;
        g {
          * {
            stroke: #014945;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin: 3em auto;
    .cards {
      flex-direction: column;
      gap: 1em;
      .card {
        width: 100%;
      }

      .card:nth-child(3) {
        display: none;
      }
    }
  }
`;

export const Contato = styled.div`
  width: 100%;
  margin-top: 15em;
  background-color: ${({ theme }) => theme.colors.primary};
  gap: 5em;

  .content-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8em;

    width: 80%;
    max-width: 1200px;
    margin: 0 auto;

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2em;

      h1 {
        color: white;
        font-size: clamp(2.5em, 4vw, 3em);
        line-height: 1;
        z-index: 1;
      }
    }

    .image-group {
      position: relative;

      img {
        margin-top: 2em;
        /* width: 100%; */
        height: 29em;
      }

      svg {
        position: absolute;
        right: 51%;
        bottom: 2%;
        /* width: 100%; */
        height: 28em;

        * {
          fill: #ff6e0f73;
        }
      }
    }
  }
    @media (max-width: 1100px) {

      .content-group {
        .image-group {
          width: 40%;
          height: 9em;
          margin: 3em 0;
          img {
            margin: 0;
            width: 50%;
            height: 100%;
          }
          
          svg {
            bottom: -46%;
            right: 0%;
            height: 100%;
            width: 100%;
          }
        }
      }

      
    }

    @media (max-width: 768px) {
      margin-top: 0;

      .content-group {
        flex-direction: column-reverse;
        gap: 0;

        .content {
          margin: 2em 0;
        }
  
        .image-group {
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
          }

          svg {
            bottom: -31%;
            right: 16%;
            height: 70%;
            width: 70%;
          }
        }
      }

  }
`;

export const SpeakWithUs = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 15em;
  
  .title {
    color: #014945;
    margin-bottom: 1em;
    margin-top: 10em;
  }

  h1 {
    font-size: clamp(1.5em, 3vw, 4em);
    color: #707070;
    line-height: 1.14;
  }

  p {
    color: #707070;
    font-size: clamp(14px,2vw,18px);
    width: 60%;
    margin: 2em auto 4em;
    line-height: 1.14;
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: space-between; 
    gap: 2em;

    .card {
      width: 30%;
      border: none;

      small {
        max-width: 290px;
        font-size: clamp(14px,2vw,18px);
      }

      svg {
        g {
          clip-path: none;
        }
      }
    }

    div:nth-child(1) {
      p {
        color: ${({ theme }) => theme.colors.primary};;
      }
    }

    div:nth-child(2) {
      small {
        color: ${({ theme }) => theme.colors.secondary};
      }
      p {
        color: #fff;
      }
    }

    div:nth-child(3) {
      padding: 1.8em 1.5em;
      small {
        color: ${({ theme }) => theme.colors.tertiary};
      }
      p {
        color: #fff;
        font-size: clamp(.7em, 1vw, 1.5em);
      }
    }

    h2 {
      font-size: clamp(1em, 1vw, 4em)
    }

    p {
      width: 100%;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 5em;
    .cards {
      display: grid;

      .card {
        width: 100%;
      }
    }
  }
`;