import Link from "next/link";
import { useState } from "react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Link href="/">Home</Link>
      </div>

      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link href="/workout">Workout</Link>
            <ul>
              <li>
                <Link href="/workout/map">Map</Link>
              </li>
              <li>
                <Link href="/workout/list">List</Link>
              </li>
              <li>
                <Link href="/workout/add-location">Add a location</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/manager">Manager</Link>
            <ul>
              <li>
                <Link href="/manager/calendar">Calendar</Link>
              </li>
              <li>
                <Link href="/manager/monthly-report">Monthly Report</Link>
              </li>
              <li>
                <Link href="/manager/budget-setting">Budget Setting</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/setting">Setting</Link>
            <ul>
              <li>
                <Link href="/setting/service-guide">Service Guide</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={`fa fa-${isMenuOpen ? "times" : "bars"}`}></i>
      </div>
    </nav>
  );
}

export default Navigation;
