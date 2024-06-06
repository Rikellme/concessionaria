import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;

export const AboutUs = styled.section`
  margin-top: 10em;
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > img {
    width: 459px;
    height: 516px;
    border-radius: 6px;
    margin-right: 15px;
  }

  .content {
    margin-top: 10px;
    & > h3 {
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    & > h2 {
      margin-bottom: 18px;
    }

    & > p {
      font-size: clamp(14px,2vw,18px);
      color: ${({ theme }) => theme.colors.text_gray};
      font-weight: 1.33em;
    }
  }

  @media(max-width: 768px) {
    width: 90%;
    text-align: center;
    flex-direction: column-reverse;
    & > img {
      width: 100%;
      height: 400px;
    }
  }
`;

export const Banner = styled.section`
  position: relative;
  padding: 5em;
  border-top-right-radius: 8px;
  z-index: 0;
  display: flex;
  justify-content: center;

  .datas {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 5em;

    .datas-informations:nth-child(1) img {
      width: 3.5em;
    }

    .datas-informations {
      display: flex;
      align-items: flex-start;
      gap: 1em;

      svg {
        margin-top: 10px;
        width: 5em;
      }

      .datas-information-texts {
        display: flex;
        flex-direction: column;
        h2 {
          line-height: 1em;
          font-size: clamp(1em, 3vw, 8em);
        }
        p {
          color: ${({ theme }) => theme.colors.text_gray};
          margin-left: 5px;
        }
      }
    }

    .datas-informations + .datas-informations {
      .datas-information-texts {
        h2 {
          font-size: clamp(2em, 3vw, 8em);
        }
      }
    }
  }

  .flutuante {
    position: absolute;
    top: -150px;
    right: 15%;
    z-index: 1;

    svg {
      width: 70%;
      * {
        fill: ${({ theme }) => theme.colors.tertiary};
      }
    }
  }


  @media (max-width: 1000px) {
    .flutuante {
      position: absolute;
      left: 50%;
      svg {
        width: 50%;
        /* height: 50%; */
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2em;
    .datas {
      gap: 3em;
      flex-direction: column;
      .datas-informations {
        justify-content: center;
        align-items: center;
        svg {
          width: 4em;
          height: 4em;

          * {
            fill: ${({ theme }) => theme.colors.tertiary};
          }
        }
      }
    }

    .flutuante {
      top: 86%;
      left: 87%;

      svg {
        width: 200%;
        height: 200%;
      }
    }
  }

  @media (max-width: 500px) {
    
    .datas {
      
      .datas-informations {
      flex-direction: row;
      text-align: center;
        
        .icons-banner {
          width: 2em;
          height: 2em;
        }
      }
    }

    .flutuante {
      top: 90%;
      left: 87%;
    }
  }
`;

export const OurMission = styled.section`
  padding: 128px 0;
  background-color: ${({ theme }) => theme.colors.primary};

  .flex {
    gap: 2em;
  }

  .content {
    h2 {
      margin-bottom: 10px;
      font-size: clamp(1.5em, 2.8vw, 3em);
    }
    p {
      font-size: clamp(14px,2vw,18px);
      color: white;
      margin-bottom: 30px;
    }

    button {
      width: auto;
      padding: 0 .5rem;
    }
  }

  & > img {
    width: 474px;
    height: 470px;
  }

  @media (max-width: 768px) {
    padding: 128px 1em;
    text-align: center;
    .flex{
      flex-direction: column;

      .content {
        width: 80%;
        button {
          width: 100%;
        }
      }
      img {
        width: 105%;
        margin-top: 3em;
      }
    }
  }
`;

export const FindYourOpportunity = styled.section`
  padding: 95px 0;

  .head {
    margin-bottom: 25px;
    h3 {
      margin-bottom: 10px;
    }

    h2 {
      margin-bottom: 10px;
    }

    p {
      font-size: clamp(14px,2vw,18px);
      color: ${({ theme }) => theme.colors.text_gray};
    }
    .coluna {
      &.one {
        width: 65%;
      }
      &.two {
      }
    }
  }

  & > .content {
    gap: 20px;
    & > img {
      width: 50%;
    }
    .opportunities {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 55px;

      .opportunity {
        position: relative;
        h4 {
          margin-bottom: 10px;
        }
        p {
          font-size: 16px;
          color: ${({ theme }) => theme.colors.text_gray};
          font-weight: 400;
        }

        &:last-child {
          h3 {
            position: absolute;
            top: 30%;
            text-align: center;
          }
          .floating-border {
            transform: rotate(88deg) scale(1.3) translateX(-12px);
            width: 100%;
            height: 100%;
            path {
              stroke: ${({ theme }) => theme.colors.tertiary};
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 95px 1em;
    text-align: center;
    & > .head {
      display: flex;
      flex-direction: column;
      gap: 2em;
      align-items: center;
    }

    & > .content {
      flex-direction: column;
      & > img {
        width: 100%;
        /* display: none; */
      }

      & > .opportunities {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
    }
  }
`;

export const WeOfferOpportunities = styled.section`
  margin-bottom: 92px;
  padding: 95px 0 255px;
  background-color: ${({ theme }) => theme.colors.primary};
  .container__ {
    position: relative;
    .head {
      margin-bottom: 52px;
      .col {
        &.one {
          width: 55%;

          h2 {
            font-size: clamp(1em, 7vw, 3em);
          }
        }
      }
    }

    .floating-border {
      position: absolute;
      transform: rotate(45deg);
      z-index: 1;
      path {
        stroke: #fff;
      }
      &.one {
        top: 50px;
        right: 0;
      }
      &.two {
        left: 0;
        bottom: -265px;
      }
    }

    .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 25px;
      row-gap: 40px;

      .card {
        height: fit-content;
        small {
          font-size: clamp(14px,2vw,18px);
        }
        &:nth-child(2),
        &:nth-child(5) {
          transform: translateY(60px);
        }

        &:nth-child(3),
        &:nth-child(6) {
          transform: translateY(120px);
        }
      }
    }
  }

  @media (max-width: 800px) {
    padding: 5em 1em;
    /* padding-right: 2em; */
    text-align: center;

    .container__ {
      .head {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;
        
        button {
          /* width: 80%; */
        } 
      }

      .floating-border {
          &.one {
            top: 35%;
            left: 0;
          }

          &.two {
            left: 0;
            bottom: 7%;
          }
        }

      .content {
        display: flex;
        flex-direction: column;
        gap: 2em;

        .card {
        height: fit-content;
        &:nth-child(2),
        &:nth-child(5) {
          transform: translateY(0);
        }

        &:nth-child(3),
        &:nth-child(6) {
          transform: translateY(0);
        }
      }
      }
    }
  }
`;

export const ConsultOurExperts = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  .flex {
    width: 70%;
    margin: 5em auto;

    form {
      .input-group {
        background-color: #f5f5f52e;

        display: flex;
        align-items: center;
        justify-content: center;
        
        border: 1px solid #FFBF01;
        border-radius: 4px;
        
        width: 25em;
        height: 3em;
        /* padding: 0 1em; */
        gap: 1em;

        input {
          background: transparent;
          color: #fff;
          flex: 1;
          height: 100%;
          border: none;
          padding-left: 1em;
          outline: none;

          &::placeholder {
            color: #fff;
          }
        }

        button {
          background-color: ${({ theme }) => theme.colors.tertiary};
          color: ${({ theme }) => theme.colors.primary};
          font-weight: bold;
          height: 80%;
          flex: .3;
          border: none;
          border-radius: 4px;
          margin-right: .3em;
        }

      }
    }
  }

  h2 {
    font-size: clamp(2.5em, 3.2vw, 4em);
    color: white;
    width: 50%;
    font-weight: lighter;
    z-index: 1;
  }

  .absolut {
    position: absolute;
    left: 7.5%;
    width: 15%;

    * {
      fill: #4c013b9c;
    }
  }

  @media (max-width: 768px) {
    .flex {
      flex-direction: column;
      gap: 2.5em;

      h2 {
        width: 100%;
        line-height: 1.2;
      }

      form {
        width: 100%;
        z-index: 1;
      .input-group {
        width: 100%;
        input {
        }

        button {
          background-color: ${({ theme }) => theme.colors.tertiary};
          color: ${({ theme }) => theme.colors.primary};
          font-weight: bold;
          height: 80%;
          flex: .3;
          border: none;
          border-radius: 4px;
          margin-right: .3em;
        }

      }
      }
    }

    .absolut {
      left: 17%;
      top: 13%;
      height: 65%;
      width: 65%;
    }
  }
`;
