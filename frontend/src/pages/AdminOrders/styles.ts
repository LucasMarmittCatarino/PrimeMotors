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
export const ReportTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #181818;
  margin: 0;
`;

// Input de filtro com ícone
export const FilterInputWrapper = styled.div`
  position: relative;
  width: 320px;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 0.8rem 2.5rem 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #c00;
    box-shadow: 0 0 0 3px rgba(204, 0, 0, 0.2);
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #aaa;
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

// Produtos
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 60px;
    height: 40px;
  }

  span {
    font-size: 0.95rem;
  }
`;
