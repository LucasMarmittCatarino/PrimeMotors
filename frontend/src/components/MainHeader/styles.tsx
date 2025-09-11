import styled from "styled-components";

export const HeaderContainer = styled.header<{ solid: boolean; visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  padding-left: 10px;
  padding: 20px;
  z-index: 1000;
  gap: 50px;

  background: ${({ solid }) => (solid ? "#191918" : "transparent")};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(-100%)")};
`;

export const HeaderLabels = styled.a`
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 40px;
  color: white;
`;
