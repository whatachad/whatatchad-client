import React from "react";
import { DesktopNavigation, HeaderContainer } from "./styles";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/" className="logo">
        <a style={{ fontSize: "5rem" }}>🔱</a>
      </Link>

      <DesktopNavigation>
        <ul>
          <li>
            <a href="/workout">Workout 💪</a>
          </li>
          <li>
            <a href="/wealth">Wealth 💰</a>
          </li>
          <li>
            <a href="/passion">Passion 🔥</a>
          </li>
        </ul>
      </DesktopNavigation>
      {/* <div className='Mobile'>Mobile header later</div> */}
    </HeaderContainer>
  );
};

export default Header;
