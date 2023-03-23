import React from "react";
import {
  HeaderContainer,
  Logo,
  SearchIcon,
  SearchTab,
  UserAuth,
} from "./styles";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link href="/">What a Chad</Link>
      </Logo>
      {/* <!-- Search bar --> */}
      <SearchTab>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <input type="text" placeholder="내 주변 운동시설 검색" />
      </SearchTab>

      {/* <!-- Login and Sign up tabs --> */}
      <UserAuth>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
      </UserAuth>
    </HeaderContainer>
  );
};

export default Header;
