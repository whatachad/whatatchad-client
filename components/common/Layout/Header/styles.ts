import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  align-items: center;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  height: 140px;
  padding: 0px 40px;
  align-content: center;

  @media (min-width: 767px) {
    /*  */
  }
`;

export const Logo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  white-space:nowrap;
`;

export const SearchTab = styled.div`
  background: #333333;
  border-radius: 25px;
  width: 100%;
  outline: none;
  display: flex;
  gap: 10px;
  align-items: center;  
  padding: 0px 15px;

  input {
    background: transparent;
    border: none;
    color: white;
    font-size: 13px;
    width: 100%;
    height: 50px;
    outline: none;
  }
`;


export const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 5px;
  background: #5C5C5C;
`;

export const UserAuth = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  
  li {
    white-space:nowrap;
    font-size: 15px;
    font-weight: 500;
  }
`;
