import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FilterInput = styled.input`
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 400px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem;
  border-bottom: 2px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
`;
