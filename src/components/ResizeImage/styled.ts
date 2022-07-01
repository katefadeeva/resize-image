import styled from "styled-components";

export const MainContainer = styled.div`
  height: calc(100vh - 85px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const ImageContainer = styled.div<{isVertical: boolean}>`
  position: relative;
  height: ${(p) => p.isVertical ? 'calc(100vh - 85px)' : 'auto'};
  width: auto;
`;
export const Image = styled.img<{isVertical: boolean}>`
  width: ${(p) => p.isVertical ? 'auto' : '100%'};
  height: ${(p) => p.isVertical ? '100%' : 'auto'};
  object-fit: contain;
`;

export const MarksList = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const InputContainer = styled.div<{top:number, left: number}>`
  position: absolute;
  top: ${(p) => p.top}px;
  left: ${(p) => p.left}px;
  z-index: 2;
`;

export const CustomInput = styled.input`
`;
