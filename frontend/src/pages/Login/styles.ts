import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export const FormWrapper = styled.form`
  background: #fff;
  border-radius: 1rem;
  padding: 2.5rem;
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 0.875rem;
  text-align: center;
`;

export const RedirectText = styled.p`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 300;
  color: #555;
  font-family: 'Ferrari Sans', sans-serif;
  
  span {
    color: #c00;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #a00;
    }
  }
`;