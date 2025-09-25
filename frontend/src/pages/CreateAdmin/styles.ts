import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 80px auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;