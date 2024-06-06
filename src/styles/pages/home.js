import styled from "styled-components";

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  margin-top: 15em;

  .description {
    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: clamp(1.5em, 3.2vw, 4em);
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 0;
    }

    p {
      font-size: clamp(14px, 2vw, 18px);
      color: ${({ theme }) => theme.colors.text_gray};
      margin: 2em 0;
      max-width: 500px;
    }

    .group-icon {
      margin-top: 3em;
      display: flex;
      justify-content: space-between;
      height: 6em;

      .group-informations {
        display: grid;
        place-items: center;
        align-items: center;
        gap: 0.5em;
        height: 100%;

        svg {
          g {
            clip-path: url();
          }
        }

        P {
          margin: 0;
          font-size: 12px;
          text-align: center;
          color: ${({ theme }) => theme.colors.secondary};
          font-weight: 600;
        }
      }
    }
  }

  .image-group {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      height: 60%;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-top: 9em;
    
    > .description {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > button {
        width: 100%;
      }

      > p {
        margin: 3em 0;
        text-align: center;
      }

      > .group-icon {
        width: 140%;
      }
    }

    .image-group {
      width: 110%;
      margin-top: 0;
      margin-left: 2em;

      > img {
        width: 100%;
      }
    }
  }
`;

export const Banner = styled.div`
  width: 85%;
  background: linear-gradient(to right, #1e00da 0%, #0f006d 90%);
  border-top-right-radius: 8px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .datas {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 5em;
    width: 90%;
    gap: 3em;

    .datas-informations {
      display: flex;
      align-items: flex-start;
      gap: 1em;

      .icons-banner {
        width: 5em;
        height: 5em;

        * {
          fill: ${({ theme }) => theme.colors.secondary};
        }
      }

      .datas-information-texts {
        display: flex;
        flex-direction: column;

        strong {
          font-size: clamp(2em, 3vw, 8em);
          color: #fff;
          line-height: 0.9;
          font-weight: 400;
        }

        p {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }

  .flutuante {
    position: absolute;
    top: 75%;
    left: 87%;
    z-index: 1;

    svg {
      g {
        clip-path: url();

        * {

            z-index: 10;
            fill: ${({ theme }) => theme.colors.secondary};
          }
      }
    }
  }

  @media (max-width: 870px) {
    width: 95%;
    margin-top: 0;

    .datas {
      flex-direction: column;
      align-items: flex-start;
      gap: 3em;
      .datas-informations {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
      }
    }
  }

  
  @media (max-width: 764px) {
    .datas {
      .datas-informations {
        align-items: center;
        .icons-banner {
          width: 5em;
          height: 5em;
        }
      }
    }

    .flutuante {
      width: 100%;
      max-width: 500px;
      top: 75%;
      left: 50%;

      svg {
        width: 40%;
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    
    .datas {
      gap: 5em;
      .datas-informations {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
        
        > .icons-banner {
          width: 3em;
          height: 3em;
        }
      }
    }

    .flutuante {
      width: 100%;
      max-width: 300px;
      /* top: 90%; */
      left: 50%;

      svg {
        width: 50%;
      }
    }
  }

`;

export const Servicos = styled.div`
  width: 90%;
  margin: 0 auto;

  .row {
    margin: 2em 0;

    h1 {
      font-size: clamp(1.5em, 4vw, 4em);
      width: 60%;
      color: ${({ theme }) => theme.colors.text_gray};
      line-height: 1.14;
    }

    Button {
      margin-right: 10%;
    }
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

      .arrow-link {
        svg {
          * {
            fill: #fff;
          }
        }
      }
    }

    .secondary {
      background-color: #f5f5f5;
      color: #707070;

      .responsive-image {
        svg {
          * {
            fill: ${({ theme }) => theme.colors.primary};
          }
        }
      }

      .arrow-link {
        svg {
          * {
            fill: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }

    .responsive-image {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
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
            stroke: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .row {
      flex-direction: column;
      gap: 2em;
      margin: 2;

      h1 {
        text-align: center;
      }

      button {
        width: 70%;
        margin: 0;
      }

    }

    .title {
      margin-top: 5em;
      text-align: center;
    }

    .cards {
      flex-direction: column;
      gap: 1em;
      .card {
        width: 100%;
        h1 {
          font-weight: bold;
        }
      }

      .card:nth-child(3) {
        display: none;
      }
    }
  }
`;

export const Historia = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12em 0;
  margin: 10em 0;

  .history-content {
    position: relative;
    /* width: 95%; */
    margin: 0 15%;
    /* margin-top: 15em; */
    max-width: 40em;
    height: 40em;
    
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;

    .history-img {
      width: 100%;

      img {
        width: 100%;
      }
    }

    .flutuante {
      position: absolute;
      left: calc(100% - 8em);
      bottom: calc(100% - 15em);
      width: 15em;

      * {
        fill: ${({ theme }) => theme.colors.secondary};
      }
    }

    .history-details {
      position: absolute;
      left: 50%;
      top: 35%;

      background-color: #fff;
      width: 70%;
      padding: 5em 4em 0.7em 4em;
      border-radius: 8px;
      display: grid;
      gap: 1em;

      h5 {
        color: ${({ theme }) => theme.colors.primary};
      }

      h1 {
        color: ${({ theme }) => theme.colors.secondary};
        line-height: 1;
        /* width: 60%; */
      }

      p {
        color: #707070;
        font-size: clamp(14px,2vw,18px);
      }

      img {
        width: 1.5em;
        margin-left: 100%;
        margin-bottom: 1em;
      }
    }
  }

  @media (min-width: 1000px) {
    .history-content {
      margin: 0 auto;
    }
  }

  @media (max-width: 800px) {
    margin: 5em 0;
    .history-content {
      display: flex;
      flex-direction: column;
    
      .flutuante {
        position: absolute;
        left: calc(100% - 5.2em);
        bottom: calc(100% - 2.7em);
        width: 5em;
        height: 5em;

        * {
          fill: ${({ theme }) => theme.colors.secondary};
        }
      }

      .history-details {
        position: initial;
        width: 97%;
        margin: 0 auto;
        margin-top: -.7em;
        border-radius: 0 0 8px 8px;
        text-align: center;
        /* left: 50%; */
      }
    }
  }

  @media (max-width: 500px) {
    .history-content {
      margin: 0 auto;
      .history-details {
        padding: 1em;
        left: 15%;
      }
    }
  }
`;

export const Processos = styled.div`
  width: 70%;
  margin: 0 auto;

  .process-content {
    width: 50%;

    h1 {
      font-size: clamp(1.5em, 3.5vw, 4em);
      color: ${({ theme }) => theme.colors.text_gray};
      margin: 0.5em 0;
      line-height: 1;
    }

    small {
      color: #707070;
      font-size: clamp(14px, 2vw, 18px);
    }

    button {
      margin-top: 2em;
      margin-bottom: 4em;
      display: block;
    }
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;

    .card {
      width: 33%;
      display: flex;
      flex-direction: column;
      background-color: red;
      padding: 2em 4em 3em 2em;
      border: none;
      border-radius: 8px;
      background-color: #f5f5f5;

      h1 {
        font-size: 4em;
      }

      small {
        margin-top: 3em;
      }
    }

    .card:nth-child(2) {
      background-color: #ff6e0f;
      transform: translateY(-5em);
      color: #fff;
    }

    .card:nth-child(3) {
      background-color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-10em);
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    .process-content {
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .title {
      margin-top: 5em;
      text-align: center;
    }

    .cards {
      flex-direction: column;
      .card {
        transform: translateY(0) !important;
        width: 100%;
      }
    }
  }
`;

export const Contato = styled.div`
  width: 100%;
  margin-top: 15em;
  background-color: #f5f5f5;
  gap: 5em;

  .content-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8em;

    width: 80%;
    margin: 0 auto;

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;

      h1 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: clamp(1.5em, 4vw, 2.5em);
        line-height: 1;
      }

      small {
        margin: 3em 0;
        font-size: clamp(14px, 2vw, 18px);
      }
    }

    img {
      margin-top: 2em;
      width: 55%;
    }

  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 3em;

    .content-group {
      gap: 2em;
      .content {
        margin: 2em 0;
      }
  
      img {
        display: none;
      }
    }

  }

  @media (max-width: 1100px) {

    .content-group {
      img {
        width: 40%;
      }
    }
  }
`;

export const Clientes = styled.div`
  width: 70%;
  margin: 0 auto;

  h1 {
    font-size: clamp(1.5em, 3.5vw, 4em);
    color: ${({ theme }) => theme.colors.text_gray};
    margin: 0.5em 0;
    line-height: 0.6;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3em;

    .card {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0;
      color: white;

      img {
        width: 104%;
        height: 20em;
        margin-left: -2%;
        object-fit: cover;
      }

      .informations {
        flex: 1;
        display: grid;
        gap: 1em;
        margin-top: -1em;
        background-color: ${({ theme }) => theme.colors.primary};
        padding: 2em;
        border-radius: 0 0 8px 8px;

        article {
          color: ${({ theme }) => theme.colors.secondary};
          font-weight: bold;
        }
      }
    }
  }

  .cards-group {
    display: grid;
    place-items: center;
    width: 40%;

    .cards {
      display: grid;
      flex-direction: column;
      gap: 0.5em;
      color: #707070;

      .profile-icon {
        width: 3em;

        * {
          fill: ${({ theme }) => theme.colors.secondary};
        }
      }

      .profile-group {
        display: flex;
        align-items: center;
        gap: 1em;

        img {
          width: 2.5em;
        }

        article {
          color: ${({ theme }) => theme.colors.primary};
          font-weight: bold;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    .row {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        display: none;
      }
    }

    .title {
      margin-top: 3em;
      text-align: center;
    }

    h1 {
      line-height: 1;
      text-align: center;
    }

    .cards {
      flex-direction: column;
    }

    .cards-group {
      width: 100%;
      gap: 2em;

      .cards {
        /* background-color: #f5f5f5; */
        padding: 1em;
        border-radius: 4px;
      }
    }
  }

  @media (max-width: 395px) {
    .cards {
      .card {
        img {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }
`;

export const Blog = styled.div`
  width: 85%;
  margin-left: 15%;

  .flex {
    width: 78.5%;

    h1 {
      font-size: clamp(1.5em, 3.5vw, 4em);
      color: ${({ theme }) => theme.colors.text_gray};
      margin: 0.5em 0;
      line-height: 0.6;
    }
  }

  .button-group {
    display: flex;
    gap: 1em;
  }

  .button-group > button:nth-child(1) {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #f5f5f5;
    
    svg {
      transform: rotate(180deg);
      * {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .button-group > button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #f5f5f5;

    width: 4em;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    border: none;
  }

  .carousel-content {
    width: 100%;
    
    .carousel {
      overflow-x: auto;
      scroll-behavior: smooth;
      
      display: flex;
      width: 110%;
      gap: 2em;
  
      .item {
        width: 100%;
        min-width: 29.4vw;
        display: flex;
        flex-direction: column;
        gap: 2em;

  
        img {
          width: 100%;
          height: 50%;
          border-radius: 8px;
          margin-left: -2%;
          object-fit: cover;
        }
  
        Button {
          padding: 0.5em;
          width: auto;
          min-width: 120px;
          height: 3em;
        }

        h1,
        small {
          color: ${({ theme }) => theme.colors.text_gray};
          line-height: 1.1;
        }

        h1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical;
          font-size: clamp(1.5em, 2vw, 3em) !important;
        }

        &:last-child {
          margin-right: 11%;
        }
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }


  @media (max-width: 890px) {
    width: 95%;
    margin-left: 1.5em;
    .flex {
      flex-direction: column;
      gap: 2em;
      margin-bottom: 3em;
      
      h1 {
        line-height: 1;
      }
      
      .button-group {
        /* display: none; */
      }
    }
    
    .carousel-content {
      /* overflow-x: scroll; */
      .carousel {
        margin-bottom: 2em;
        display: -webkit-box;
      }
    }
  }

  @media (max-width: 768px) {
    .title {
      margin-top: 5em;
      text-align: center;
    }

    .row {
      text-align: center;
    }

    .carousel-content {
      .carousel {
        .item {
          h1 {
            width: 80%;
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }
      .title {
        margin-top: 3em;
      }
  
      .row {
        h1 {
          line-height: 1;
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
  }

  h2 {
    font-size: clamp(2.5em, 3.2vw, 4em);
    color: white;
    width: 60%;
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

  @media(max-width: 768px) {

    .flex {
      flex-direction: column;
      margin: 3em auto;

      h2 {
        width: 100%;
        line-height: 1.2;
      }

      button {
        margin-left: 45%;
        font-size: 1em;
        width: 50%;
        z-index: 1;
      }

      .absolut {
        left: 17%;
        top: 13%;
        height: 65%;
        width: 65%;
      }
    }
  }
`;
