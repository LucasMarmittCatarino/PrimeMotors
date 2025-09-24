import styled, { keyframes } from "styled-components";

const growLine = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  background-color: #fff;
`;

export const BackButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: #333;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  z-index: 1000;
  transition: color 0.2s;

  &:hover {
    color: #c00;
  }
`;

export const Form = styled.form`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* aumentamos o gap horizontal */
`;

export const InputWrapper = styled.div`
  position: relative;
  flex: 1 1 200px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 0.75rem 0.25rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #c00;
    box-shadow: 0 0 0 3px rgba(204, 0, 0, 0.2);
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -0.6rem;
    left: 0.65rem;
    font-size: 0.75rem;
    background: #fff;
    padding: 0 0.25rem;
    color: #c00;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 1rem;
  left: 0.75rem;
  font-size: 1rem;
  color: #aaa;
  font-family: 'Ferrari Sans', sans-serif;
  pointer-events: none;
  transition: all 0.2s ease;
`;

export const SubmitButton = styled.button`
  background-color: #c00;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  font-family: 'Ferrari Sans', sans-serif;
  transition: background 0.3s ease;

  &:hover {
    background-color: #a00;
  }
`;

export const SectionTitle = styled.h3`
  font-family: 'Ferrari Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 1rem 0 0.5rem;
`;

export const Divider = styled.div`
  height: 2px;
  background-color: #c00;
  width: 100%;
  border-radius: 2px;
  margin: 1rem 0;
  animation: ${growLine} 0.5s ease-out forwards;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Ferrari Sans', sans-serif;
  font-size: 0.9rem;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 0.875rem;
  font-family: 'Ferrari Sans', sans-serif;
  text-align: center;
`;
