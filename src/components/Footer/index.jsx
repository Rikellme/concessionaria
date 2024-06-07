import { useTheme } from "styled-components";
import Button from "@/components/Button";
import { Container } from "./styles";

import Facebook from "../../assets/svg/facebook.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Linkedin from "../../assets/svg/linkedin.svg";
import Logo from "../../assets/svg/logo.svg";

export default function Footer() {
  const { colors } = useTheme();
  return (
    <Container>
      <section className="content">
        <div className="datas container__">
          <div className="logo-content">
            <img src="./img/logo.png" alt="" className="logo" />
            <p>Oferecemos a oportunidade, <br />você desfruta da sofisticação</p>
          </div>
          <div className="informations">
            <div className="links">
              <p>MENU</p>
              <div>
                <a href="">HOME</a>
              </div>
              <div>
                <a href="produtos">PRODUTOS</a>
              </div>
            </div>
            <div className="links">
              <p>FALE CONOSCO</p>
              <div className="datas-group">
                <p>E-MAIL</p>
                <small>contato@concessionaria.com.br</small>
              </div>
              <div className="datas-group">
                <p>TELEFONE</p>
                <small>(11) 1111-1111</small>
              </div>
            </div>
          </div>
          <div className="social-medias">
            <p>REDES SOCIAIS</p>
            <div className="links-group">
              <a href="" target="_blank">
                <Facebook />
              </a>
              <a href="" target="_blank">
                <Instagram />
              </a>
              <a href="" target="_blank">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-data">
          <small>2024 © Copyright </small>
          <small><a href="">POLÍTICA DE PRIVACIDADE</a></small>
          <small><a href="">TERMOS DE USO</a></small>
        </div>
      </section>
    </Container>
  );
}
