// src/pages/Products/styles.ts
import styled from "styled-components";

export const PageWrapper = styled.div`
  margin-top: 80px;
  padding: 40px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 1px;
`;

export const AdminActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const AdminButton = styled.button`
  background: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
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
