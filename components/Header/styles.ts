import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #091121;
  color: white;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
`;

export const DesktopNavigation = styled.div`
  display: flex;

  @media (min-width: 767px) {
    flex-direction: column;
    ul {
      display: flex;
    }
  }

  ul {
    list-style: none;
  }

  li {
    margin: 1rem;
  }
`;
