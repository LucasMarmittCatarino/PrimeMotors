import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 350px;
  background-color: #fff;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;

  box-shadow: 0px 8px 20px rgba(0,0,0,0.25);

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-8px);

    box-shadow: 0px 12px 32px rgba(0,0,0,0.35),
                0px 16px 48px rgba(0,0,0,0.25);
  }
`;




export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const CardCarName = styled.h2`
  font-size: 1.2rem;
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 500;
  margin: 12px 0 4px 0;
  color: #333;
  text-align: center;
`;

export const CardCarPrice = styled.p`
  font-size: 0.9rem;
  font-family: 'Ferrari Sans', sans-serif;
  font-weight: 300;
  color: #c00;
  margin-bottom: 12px;
`;
