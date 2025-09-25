import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 120px auto 50px; /* deixa espaço para header */
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
  color: #111;
`;

export const CartContent = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Items = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.h2`
  font-size: 18px;
  color: #222;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #28a745;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    width: 60px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

export const RemoveButton = styled.button`
  align-self: flex-start;
  padding: 5px 10px;
  background: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #d32f2f;
  }
`;

export const Summary = styled.div`
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  height: fit-content;
  background: #f9f9f9;
`;

export const SummaryTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const SummaryItemTotal = styled(SummaryItem)`
  font-weight: bold;
  font-size: 18px;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

export const CheckoutButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  background: #ff9900;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #e68a00;
  }
`;
