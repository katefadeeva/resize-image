import styled from 'styled-components';

export const IconContainer = styled.span<{
  fillColor?: string;
  strokeColor?: string;
}>`
  display: inline-block;
  vertical-align: top;
  color: ${(p) => (p.color ? p.color : 'inherit')};

  svg {
    display: block;
    fill: ${(p) => (p.fillColor ? p.fillColor : 'currentColor')};
    stroke: ${(p) => (p.strokeColor ? p.strokeColor : 'none')};

    &:not(:root) {
      overflow: hidden;
    }
  }
`;
