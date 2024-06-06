import { useRef } from 'react';

import { useTheme } from "styled-components";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import {
  Banner,
  Contato,
  Content,
  Historia,
  Processos,
  Servicos,
  Blog,
  ConsultOurExperts,
} from "@/styles/pages/home";

import Arrow from "../assets/svg/arrow.svg";
// import Search from "../assets/svg/search.svg";
// import Snowflake from "../assets/svg/snowflake.svg";
import Profile from "../assets/svg/profile.svg";
import { AiOutlineStar } from "react-icons/ai";
// import Pj from "../assets/svg/pj.svg";
import Car from "../assets/svg/veiculo.svg";
// import Certificado from "../assets/svg/certificado.svg";
// import Floating from "../assets/svg/floating.svg";
// import Accelerator from "../assets/svg/accelerator.svg";
// import Servicos1 from "../assets/svg/servicos-image-1.svg";
// import Servicos2 from "../assets/svg/servicos-image-2.svg";

import { BLOGS } from "../constants/blog";
// import Video from '@/components/Video';


export default function Home() {
  const { colors } = useTheme();

  const carousel = useRef(null);
  const card = useRef(null);

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= card.current.offsetWidth;
    // console.log(carousel.current.scrollLeft)
  };

  const handleRightClick = () => {
    carousel.current.scrollLeft += card.current.offsetWidth;
    // console.log(carousel.current.scrollLeft)
  };

  return (
    <>
      <Header />
      <Content className='container__'>
        <div className="description">
          <h1>Está a procura</h1>
          <h1>de um carro</h1>
          <h1>que seja a sua cara ?</h1>
          <h1>Você está</h1>
          <h1>no lugar certo!</h1>
          <p>
          Aqui você encontra os mais diversos tipos e modelos de carros luxuosos que combinam com todos os tipos de gostos
          </p>
        </div>
        <div className="image-group">
          <img
            className="image-float"
            src="./img/carros/carro-float.png"
            alt=""
          />
        </div>
      </Content>
      <Banner>
        <div className="datas container__">
          <div className="datas-informations">
            <Car className="icons-banner" />
            <div className="datas-information-texts">
              <strong>+40mil</strong>
              <p>É a quantidade de carros já vendidos pela nossa agência</p>
            </div>
          </div>
          <div className="datas-informations">
            <Profile className="icons-banner" />
            <div className="datas-information-texts">
              <strong>+5mil</strong>
              <p>Representa o total de clientes satisfeitos com nossos produtos</p>
            </div>
          </div>
          <div className="datas-informations">
            <AiOutlineStar className="icons-banner" />
            <div className="datas-information-texts">
              <strong>+2mil</strong>
              <p>É a quantidade de produtos que temos em nossos estoque</p>
            </div>
          </div>
        </div>
        <div className="flutuante">
          {/* <Floating /> */}
        </div>
      </Banner>
      {/* <Video /> */}
      <Contato>
        <div className="content-group container__">
          <div className="content">
            {/* <h1>Entre em contato e tire suas dúvidas.</h1>
            <small>
            Estamos disponíveis em diversos canais de contato, prontos para te atender! Entre em contato para falar com nossos atendentes.
            </small> */}
            <h1>Aqui você não apenas sonha</h1>
            <small>
            Transforme já seu sonho de ter um carro próprio em realidade, não perca tempo e venha já comprar um carro que seja a sua cara
            </small>

          </div>
          <img src="./img/carros/carro-luxo.png" alt="" />
        </div>
      </Contato>
      <Blog>
        <p className="title">ALGUNS DOS NOSSOS CARROS</p>
        <div className="flex">
          <div>
            <h1>Descomplique sua vida.</h1>
            <h1>Compre já um de nossos carros!</h1>
          </div>
          <div className="button-group">
            <button onClick={handleLeftClick}> <Arrow width="1.5em" /> </button>
            <button onClick={handleRightClick}> <Arrow width="1.5em" /> </button>
          </div>
        </div>
        <div className="carousel-content">
          <div className="carousel" ref={carousel}>
            {BLOGS.map((blog, index) => {
              // const {id, image, title, text_button} = blog;
              return(
                <a ref={card} key={index} className="item">
                    <img src={blog.thumbnail} alt="" />
                    <div>
                      <Button>{blog.category}</Button>
                    </div>
                    <h1>{blog.title}</h1>
                    <small>{blog.date}</small>
                </a>
              )
            })}
          </div>
        </div>
      </Blog>
      <ConsultOurExperts className="side-bar">
        <div className="flex">
          {/* <Snowflake className="absolut"/> */}
          <h2>Não perca tempo e compre já nossos carros de Luxo!</h2>
        </div>
      </ConsultOurExperts>
      <Footer />
    </>
  );
}
