import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const HeaderContainer = styled.header<{
  solid: boolean;
  visible: boolean;
  allowTransparent?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  padding: 20px 40px;
  z-index: 1000;

  background: ${({ solid, allowTransparent }) =>
    allowTransparent
      ? solid
        ? "#191918"
        : "transparent"
      : "#191918"};

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

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 20px;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const UserButton = styled.button`
  background: rgba(255,255,255,0.05);
  border: none;
  color: #fff;
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 12px;
  border-radius: 20px;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export const UserDropdown = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: #191918;
  border-radius: 10px;
  width: 180px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 10;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  transition: background 0.2s;
  font-family: 'Ferrari Sans', sans-serif;

  &:hover {
    background-color: #e0b450;
    color: #191918;
  }
`;

export const CartIconImg = styled(FaShoppingCart)`
  width: 20px;
  height: 20px;
  color: #fff;
`;