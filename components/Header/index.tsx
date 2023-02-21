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
            <Link href="/workout">
              <a>Workout 💪</a>
            </Link>
          </li>
          <li>
            <Link href="/wealth">
              <a>Wealth 💰</a>
            </Link>
          </li>
          <li>
            <Link href="/passion">
              <a>Passion 🔥</a>
            </Link>
          </li>
        </ul>
      </DesktopNavigation>
      {/* <div className='Mobile'>Mobile header later</div> */}
    </HeaderContainer>
  );
};

export default Header;
