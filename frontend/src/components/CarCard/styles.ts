import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 320px; // altura fixa para manter todos alinhados
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  padding: 10px;
  font-family: 'Ferrari Sans', sans-serif;
  font-size: 12px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 5px 0 0;
    color: #444;
  }
`;

export const AdminButtons = styled.div`
  margin-top: auto; // empurra os botões para o final do card
  display: flex;
  justify-content: space-between;
  font-family: 'Ferrari Sans', sans-serif;
  padding: 10px;

  button {
    padding: 6px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background 0.2s ease;
  }

  button:first-child {
    background: #e0b450;
    color: black;
    font-family: 'Ferrari Sans', sans-serif;
    font-weight: 400;
  }

  button:last-child {
    background: #dc3545;
    color: #fff;
    font-family: 'Ferrari Sans', sans-serif;
    font-weight: 400;

    &:disabled {
      background: #a0a0a0;
      cursor: not-allowed;
    }
  }
`;
