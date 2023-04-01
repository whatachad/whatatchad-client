import { RoundedMenuIcon } from "@/components/common/Layout/NavigationTab/styles";
import Image from "next/image";
import React from "react";
import { WorkoutDetailContainer, WorkoutInfo, WorkoutType } from "./styles";

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
      <WorkoutDetailContainer>
        <h3>강남 스포애니</h3>
        <WorkoutInfo>
          <RoundedMenuIcon />
          <h3>강남구 논현동</h3>
          <WorkoutType>
            <span>헬스장</span>
            <span>4km</span>
          </WorkoutType>
        </WorkoutInfo>
      </WorkoutDetailContainer>
    </div>
  );
};

export default WorkoutItem;
