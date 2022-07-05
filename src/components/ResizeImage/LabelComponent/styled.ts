import styled from 'styled-components';

export const LabelContainer = styled.div<{top: number; left: number}>`
  position: absolute;
  top: ${(p) => p.top}px;
  left: ${(p) => p.left}px;
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const StyledButton = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  :hover {
    background-color: lightgrey;
  }
  svg {
    display: block;
    margin: 0;

    &:not(:root) {
      overflow: hidden;
    }
  }
`;
