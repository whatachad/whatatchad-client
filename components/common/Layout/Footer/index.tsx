import React from "react";
import { FooterContainer } from "./styles";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterContainer>
      <h1>What a Chad 🔱</h1>
      <a href="https://github.com/whatachad">
        <BsGithub /> All rights reserved.
      </a>
    </FooterContainer>
  );
};

export default Footer;
