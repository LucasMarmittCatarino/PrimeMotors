import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f1f1f;
`;

export const FormWrapper = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  color: #181818;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #c00;
    box-shadow: 0 0 0 3px rgba(204, 0, 0, 0.2);
  }
`;

export const SubmitButton = styled.button`
  background-color: #c00;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #a00;
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 0.875rem;
  text-align: center;
`;