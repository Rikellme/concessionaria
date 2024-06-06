import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useTheme } from "styled-components";

import { Content, Link } from "./styles";
import { toast } from "react-hot-toast";

import { BiLogIn } from 'react-icons/bi';
import { BiLock } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header({ page }) {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const router = useRouter();
  const { colors } = useTheme();
  const options = [
    { name: "home", path: "./", color: colors.secondary },
    { name: "produtos", path: "./produtos", color: colors.quaternary},
  ];

  return (
    <Content page={page}>
      <div className="content">
        <Link href="/">
          <img src="img/logo.png" alt="" />
        </Link>

        <nav ref={navRef}>
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <Link
                  page={page}
                  href={option.path}
                  className={option.path === router.pathname ? "active" : ""}
                  color={option.color}
                >
                  {option.name}
                </Link>
              </li>
            ))}
            
            <li className="nav-close-btn">
              <Link href="/">
                <img src="/img/logo.png" alt="" />
              </Link>
              <button className="nav-btn" onClick={showNavbar}>
               <AiOutlineClose />
              </button>
            </li>
          </ul>
        </nav>
        <button className="nav-btn new-button" onClick={showNavbar}>
          <BiMenu />
        </button>
      </div>
    </Content>
  );
}
