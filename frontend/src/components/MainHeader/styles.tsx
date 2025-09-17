import styled from "styled-components";
export const HeaderContainer = styled.header<{ solid: boolean; visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between; /* separa menu e ações */
  align-items: center;
  transition: all 0.3s ease;
  padding: 20px 40px;
  z-index: 1000;
  background: ${({ solid }) => (solid ? "#191918" : "transparent")};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(-100%)")};
`;

export const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 30px;
`;

export const AuthLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const HeaderLabels = styled.a`
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #e0b450;
  }
`;

export const SignUpButton = styled.button`
  background: #e0b450;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  color: #191918;
  transition: all 0.3s ease;

  &:hover {
    background: #ffcf5b;
  }
`;
