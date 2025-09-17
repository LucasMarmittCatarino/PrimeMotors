import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.2);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Ferrari Sans', sans-serif;
  color: #181818;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 500;
  font-family: 'Ferrari Sans', sans-serif;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-family: 'Ferrari Sans', sans-serif;
  font-size: 0.7rem;

  &:focus {
    outline: none;
    border-color: #c00;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #c00;
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  background: #c00;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: #a00;
  }

  &:disabled {
    background: #888;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  font-family: 'Ferrari Sans', sans-serif;
  text-align: center;
`;

export const RedirectText = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-family: 'Ferrari Sans', sans-serif;
  font-size: 0.9rem;

  span {
    color: #c00;
    cursor: pointer;
    text-decoration: underline;
  }
`;