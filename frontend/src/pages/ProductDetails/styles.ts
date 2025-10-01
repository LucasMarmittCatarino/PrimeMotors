import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 100px auto 0 auto; /* margin-top para header */
  font-family: 'Arial', sans-serif;
`;

export const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
`;

export const ProductImage = styled.img`
  flex: 1 1 400px;
  max-width: 500px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const InfoBox = styled.div`
  flex: 1 1 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

export const PriceStockWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px 0;
`;

export const Price = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #28a745;
`;

export const Stock = styled.span`
  font-size: 14px;
  color: #555;
`;

export const ActionButton = styled.button`
  padding: 15px 25px;
  background-color: #ff5a5f;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.2s;

  &:hover {
    background-color: #e04850;
  }

  &:active {
    transform: scale(0.98);
  }
`;
