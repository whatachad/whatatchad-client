import PageTitle from "@/components/common/Page/PageTitle";
import React from "react";
import { MapIcon, SubHeader, WorkoutListContainer } from "./styles";
import { GrMapLocation } from "react-icons/gr";
import FacilityItem from "@/components/unit/WorkoutItem";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <SubHeader>
        <PageTitle title="Workout" location="청주시 OO구 OO동" />
        <MapIcon>
          <GrMapLocation />
        </MapIcon>
      </SubHeader>
      <WorkoutListContainer>
        <FacilityItem />
        <FacilityItem />
        <FacilityItem />
        <FacilityItem />
        <FacilityItem />
        <FacilityItem />
        <FacilityItem />
        <FacilityItem />
      </WorkoutListContainer>
    </div>
  );
};

export default index;
