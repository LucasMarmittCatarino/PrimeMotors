// src/pages/styles.ts (para ProductForm)
import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const FormWrapper = styled.form`
  background: #fff;
  border-radius: 1rem;
  padding: 3rem;                // mais espaçamento interno
  width: 520px;                 // largura maior
  display: flex;
  flex-direction: column;
  gap: 2rem;                    // mais espaço entre inputs
  box-shadow: 
    0 10px 15px rgba(0,0,0,0.1),
    0 20px 25px rgba(0,0,0,0.1),
    0 30px 35px rgba(0,0,0,0.15);
`;


export const Title = styled.h1`
  font-size: 1.75rem;
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 700;
  text-align: center;
  color: #181818;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 0rem 0.25rem 0rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
  font-size: 1rem;
  outline: none;

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

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 0rem 0.25rem 0rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
  font-size: 1rem;
  outline: none;
  min-height: 80px;
  resize: vertical;

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
  font-family: 'Ferrari Sans', sans-serif;
  top: 1rem;
  left: 0.75rem;
  font-size: 1rem;
  color: #aaa;
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

  &:disabled {
    background: #888;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  background-color: #ffcf5b;
  color: black;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  font-family: 'Ferrari Sans', sans-serif;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e0b450;
  }

  &:disabled {
    background: #888;
    cursor: not-allowed;
  }
`;
