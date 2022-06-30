import styled from "styled-components";

export const MainContainer = styled.div`
  height: calc(100vh - 85px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Image = styled.img<{isVertical: boolean}>`
  width: ${(p) => p.isVertical ? 'auto' : '100%'};
  height: ${(p) => p.isVertical ? '100%' : 'auto'};
  object-fit: contain;
`;
