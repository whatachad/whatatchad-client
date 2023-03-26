import { RoundedMenuIcon } from "@/components/common/Layout/NavigationTab/styles";
import Image from "next/image";
import React from "react";

const WorkoutItem = () => {
  return (
    <div className="WorkoutItemContainr">
      <Image
        src="https://picsum.photos/200/300"
        alt="Workout"
        className="WorkoutImg"
        width={300}
        height={200}
      />
      <div className="WorkoutDetails">
        <h3>Workout Name</h3>
        <div>
          <RoundedMenuIcon />

          <h3>Gangnam spoany</h3>
          <div className="WorkoutType">
            <span>Workout Type</span>
            <span>Workout Type</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutItem;
