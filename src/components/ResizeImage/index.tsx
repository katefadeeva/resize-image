import React, {useRef} from "react";
import * as S from './styled';
import {useStore} from "effector-react";
import {size$} from "../../models/resizeImage";

export function ImageResize() {
  const ref = useRef<HTMLImageElement | null>(null)
  const {originalHeight, originalWidth, image} = useStore(size$);

  return <S.MainContainer >
    <S.Image ref={ref} src={image} alt='image' isVertical={originalHeight > originalWidth}/>
  </S.MainContainer>
}
