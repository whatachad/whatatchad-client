import React from "react";
import { RoundedMenu, SingleTab } from "./styles";
import Link from "next/link";

interface TabProps {
  text: string;
  path: string;
}

const Tab = ({ text, path }: TabProps) => {
  return (
    <SingleTab>
      {/* sqaure and text */}
      <RoundedMenu />
      <div className="text-xs text-gray-400">
        <Link href={path}>{text}</Link>
      </div>
    </SingleTab>
  );
};

export default Tab;
