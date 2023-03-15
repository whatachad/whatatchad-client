import Link from "next/link";
import { useState } from "react";
import Tab from "./Tab";
import { NavigationTabContainer } from "./styles";

function Navigation() {
  return (
    <NavigationTabContainer>
      <h2 className="">
        <Link href="/">Home</Link>
      </h2>

      <div className="">
        <ul>
          <h2 className="">
            <Link href="/">Workout</Link>
          </h2>
          <Tab text={"지도"} path="/workout/map" />
          <Tab text={"리스트"} path="/workout/list" />
          <Tab text={"운동시설추가"} path="/workout/add-location" />
        </ul>
        <ul>
          <h2 className="">
            <Link href="/">Manage</Link>
          </h2>
          <Tab text={"캘린더"} path="/workout/map" />
          <Tab text={"월별 내역"} path="/workout/list" />
          <Tab text={"예산 설정"} path="/workout/add-location" />
        </ul>
        <ul>
          <h2 className="">
            <Link href="/">Setting</Link>
          </h2>
          <Tab text={"서비스 안내"} path="/workout/map" />
        </ul>
      </div>

      <div className="menu-icon">
        <i className=""></i>
      </div>
    </NavigationTabContainer>
  );
}

export default Navigation;
