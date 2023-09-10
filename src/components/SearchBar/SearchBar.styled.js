import styled from 'styled-components';
export const SearchInput = styled.input`
  margin: 15px;
  width: auto;
  height: 30px;
  border: none;
  border-radius: 10px;
`;

export const SearchBtn = styled.button`
  width: 100px;
  height: 30px;

  background-color: white;
  border: 1px solid black;
  border-radius: 10px;

  &:hover {
    background-color: rgba(0, 0, 255, 0.5);
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const SearchBarContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 15px;
  z-index: 2;

  margin-top: 100px;
`;

export const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
