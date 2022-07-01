import React, {MouseEvent, useEffect, useRef} from "react";
import * as S from './styled';
import {useStore} from "effector-react";
import {changeMarks, size$} from "../../models/resizeImage";

export interface MarkType {
  top: number;
  left: number;
  text: string;
}

export function ImageResize() {
  const ref = useRef<HTMLImageElement | null>(null)
  const {originalHeight, originalWidth, image, marks} = useStore(size$);

  // useEffect(() => {
  //   if (!ref.current) {
  //     return
  //   }
  //   const resizeObserver = new ResizeObserver(entries => {
  //     for (let entry of entries) {
  //       if(entry.contentBoxSize) {
  //         // Firefox implements `contentBoxSize` as a single content rect, rather than an array
  //         const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
  //
  //         console.log('if', entry);
  //       } else {
  //         console.log('else')
  //       }
  //     }
  //   });
  //
  //   resizeObserver.observe(ref.current);
  // })

  function addMark(e: MouseEvent<HTMLDivElement>) {
    const locationImage = ref?.current && ref.current.getBoundingClientRect();
    const left = e.pageX - (locationImage?.left || 0);
    const top = e.pageY - (locationImage?.top || 0);
    changeMarks([...marks, {top, left, text: 'Тестовый текст'}])
  }

  return <S.MainContainer >
    <S.ImageContainer isVertical={originalHeight > originalWidth}>
      <S.Image
        src={image}
        alt='image'
        isVertical={originalHeight > originalWidth}
      />
      <S.MarksList
        ref={ref}
        onClick={addMark}>
        {marks.map(({top, left, text}, index) =>
          <S.InputContainer top={top} left={left} key={index}>
            {text}
          </S.InputContainer>
        )}
      </S.MarksList>
    </S.ImageContainer>
  </S.MainContainer>
}
