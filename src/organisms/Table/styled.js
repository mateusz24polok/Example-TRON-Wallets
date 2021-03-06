import styled from "styled-components";

export const StyledTable = styled.table`
    max-width: 1200px;
    background-color: rgba(26, 33, 45, 0.8);
    border: 1px solid #23B6DB;
    border-radius: 20px;
    padding: 30px;
    border-collapse: collapse;
    color: ${({theme})=>theme.colors.tableCellText};
    position: relative;
`;

export const Title = styled.caption`
    font-size: 30px;
    margin-bottom: 10px;
    color: ${({theme})=>theme.colors.tableTitle};
`;

export const TableWrapper = styled.section`
    overflow-x: auto;
`;