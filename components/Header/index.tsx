import React from "react";
import { HeaderContainer, Logo, SearchTab, UserAuth } from "./styles";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/" className="logo">
        <Logo>What a Chad</Logo>
      </Link>
      {/* <!-- Search bar --> */}
      <SearchTab>
        <input type="text" placeholder="내 주변 운동시설 검색" />
      </SearchTab>

      {/* <!-- Login and Sign up tabs --> */}
      <UserAuth>
        <ul>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </UserAuth>
    </HeaderContainer>
  );
};

export default Header;
