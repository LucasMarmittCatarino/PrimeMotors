import styled from "styled-components";

// Container geral
export const Wrapper = styled.div`
  padding: 80px 20px 40px;
  max-width: 1400px;
  margin: 0 auto;
  font-family: 'Ferrari Sans', sans-serif;
`;

// Header do relatório: título + pesquisa
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

// Título do relatório
export const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #181818;
  margin: 0;
`;

// Tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

// Linhas da tabela
export const TableRow = styled.tr`
  background: #fff;
  border-bottom: 1px solid #c00; // linha vermelha fina
`;

// Cabeçalho
export const TableHeader = styled.th`
  text-align: left;
  padding: 12px 15px;
  background-color: #f5f5f5;
  font-weight: 600;
  font-size: 1rem;
  color: #333;
`;

// Células
export const TableCell = styled.td`
  padding: 12px 15px;
  vertical-align: middle;

  img {
    border-radius: 5px;
    object-fit: cover;
  }

  span {
    font-size: 0.95rem;
    color: #222;
  }
`;

export const AdminActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const AdminButton = styled.button`
  background: #ffcf5b;
  color: black;
  font-size: 14px;
  font-weight: 300;
  font-family: 'Ferrari Sans', sans-serif;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e0b450;
    transform: scale(1.05);
  }
`;

export const AdminButtons = styled.div`
  margin-top: auto; // empurra os botões para o final do card
  display: flex;
  justify-content: end;
  gap: 10px;
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