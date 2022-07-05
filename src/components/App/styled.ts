import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: black;
  height: 75px;
`;

export const Title = styled.header`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 28px;
  padding-top: 10px;
`;

export const ActionContainer = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 20px;
`;
