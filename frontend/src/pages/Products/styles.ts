// src/pages/Products/styles.ts
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const PageWrapper = styled.div`
  margin-top: 80px;
  padding: 40px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  font-family: 'Ferrari Sans', sans-serif;
  color: #333;
  letter-spacing: 1px;
`;

export const FilterInputWrapper = styled.div`
  position: relative;
  width: 300px;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 15px;
  border-radius: 25px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #c00;
    box-shadow: 0 0 5px rgba(204,0,0,0.3);
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
`;

export const AdminActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const AdminButton = styled.button`
  background: #ffcf5b;
  color: black;
  font-size: 14px;
  font-weight: 300;
  font-family: 'Ferrari Sans', sans-serif;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e0b450;
    transform: scale(1.05);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  justify-content: center;
  align-items: stretch;
  padding: 10px;
`;
