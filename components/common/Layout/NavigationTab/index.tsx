import Link from "next/link";
import Tab from "./Tab";
import { NavigationTabContainer, Tabs } from "./styles";

function Navigation() {
  return (
    <NavigationTabContainer>
      <h2>
        <Link href="/">Home</Link>
      </h2>

      <Tabs>
        <h2>
          <Link href="/">Workout</Link>
        </h2>
        <Tab text={"지도"} path="/workout/map" />
        <Tab text={"리스트"} path="/workout/list" />
        <Tab text={"운동시설추가"} path="/workout/add-location" />
      </Tabs>
      <Tabs>
        <h2>
          <Link href="/">Manage</Link>
        </h2>
        <Tab text={"캘린더"} path="/workout/map" />
        <Tab text={"월별 내역"} path="/workout/list" />
        <Tab text={"예산 설정"} path="/workout/add-location" />
      </Tabs>
      <Tabs>
        <h2>
          <Link href="/">Setting</Link>
        </h2>
        <Tab text={"서비스 안내"} path="/workout/map" />
      </Tabs>
      {/* <div className="menu-icon">
        <i></i>
      </div> */}
    </NavigationTabContainer>
  );
}

export default Navigation;
