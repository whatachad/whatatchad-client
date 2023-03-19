import styled from "styled-components";

export const NavigationTabContainer = styled.aside`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 240px;
  min-width: 240px;
`;


export const Tabs = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const SingleTab = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RoundedMenu = styled.div`
  background: #333333;
  border-radius: 5px;
  width: 30px;
  height: 30px;
`;
