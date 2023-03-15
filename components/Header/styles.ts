import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #000000;
  color: white;
  margin: 0 auto;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  @media (min-width: 767px) {
    /*  */
  }
`;

export const Logo = styled.div`
  font-weight: bold;
`;

export const SearchTab = styled.div`
  background: #333333;
  border-radius: 25px;
  width: 80%;
  outline: none;

  input {
    background: transparent;
    border: none;
    color: white;
    font-size: 1.2rem;
    padding: 1rem;
    width: 100%;
    outline: none;
  }
`;

export const UserAuth = styled.div`
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
