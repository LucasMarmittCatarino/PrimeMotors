import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 100px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  background-color: #f5f5f5;
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const FilterInput = styled.input`
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
