import React, {MouseEvent, useEffect, useRef} from "react";
import {v4 as uuidv4} from 'uuid';
import {useStore} from "effector-react";
import * as S from './styled';
import {
  changeLocationImageLeft,
  changeLocationImageTop,
  changeMarks, changeImageHeight,
  changeImageWidth,
  size$
} from "../../models/resizeImage";
import {MarkComponent} from "../MarkComponent";

export interface MarkType {
  id: string;
  top: number;
  left: number;
  text: string;
}

export function ImageResize() {
  const ref = useRef<HTMLImageElement | null>(null)
  const {originalHeight, originalWidth, image, marks, imageHeight, imageWidth, imageTop, imageLeft} = useStore(size$);

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const locationImage = ref.current.getBoundingClientRect();
    changeLocationImageTop(locationImage.top);
    changeLocationImageLeft(locationImage.left);
  })

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if(entry.contentBoxSize) {
          const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
          changeImageWidth(contentBoxSize.inlineSize);
          changeImageHeight(contentBoxSize.blockSize);
        } else {
          changeImageWidth(entry.contentRect.width);
          changeImageHeight(entry.contentRect.height);
        }
      }
    });

    resizeObserver.observe(ref.current);
  }, [ref.current])

  function addMark(e: MouseEvent<HTMLDivElement>) {
      const leftMark = e.pageX;
      const topMark = e.pageY;
      const percentTop = (topMark - imageTop) / imageHeight;
      const percentLeft = (leftMark - imageLeft) / imageWidth;
    changeMarks([...marks, {id: uuidv4(), top: percentTop, left: percentLeft, text: ''}])
  }

  return <S.MainContainer >
    <S.ImageContainer isVertical={originalHeight > originalWidth}>
      <S.Image
        src={image}
        alt='image'
        isVertical={originalHeight > originalWidth}
        ref={ref}
        onClick={addMark}
      />
      {marks.map((item) => <MarkComponent mark={item} key={item.id} /> )}
    </S.ImageContainer>
  </S.MainContainer>
}
