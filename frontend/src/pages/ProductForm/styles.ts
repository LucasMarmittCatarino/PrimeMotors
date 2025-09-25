import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 14px;
  min-height: 80px;
`;

export const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #007bff;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;