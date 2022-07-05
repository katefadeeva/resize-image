import styled from 'styled-components';

export const ImageContainer = styled.div<{isVertical: boolean}>`
  height: ${(p) => (p.isVertical ? 'calc(100vh - 85px)' : 'auto')};
  width: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const Image = styled.img<{isVertical: boolean}>`
  width: ${(p) => (p.isVertical ? 'auto' : '100%')};
  height: ${(p) => (p.isVertical ? '100%' : 'auto')};
  object-fit: contain;
  position: relative;
`;
