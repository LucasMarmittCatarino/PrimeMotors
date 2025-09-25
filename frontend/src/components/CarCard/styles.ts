import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  width: 250px;
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
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;

  button {
    padding: 5px 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
  }

  button:first-child {
    background: #007bff;
    color: #fff;
  }

  button:last-child {
    background: #dc3545;
    color: #fff;
  }
`;
