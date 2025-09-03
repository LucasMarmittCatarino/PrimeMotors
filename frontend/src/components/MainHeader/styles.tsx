import styled from "styled-components";

export const HeaderContainer = styled.header<{ solid: boolean; visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  transition: all 0.3s ease;
  z-index: 1000;

  background: ${({ solid }) => (solid ? "#191918" : "transparent")};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(-100%)")};
`;

export const HeaderLabels = styled.h1`
  color: #fff;
`;
