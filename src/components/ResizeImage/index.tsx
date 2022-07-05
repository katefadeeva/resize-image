import React, {MouseEvent, useEffect, useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useStore} from 'effector-react';
import * as S from './styled';
import {
  changePositionImageLeft,
  changePositionImageTop,
  changeLabels,
  changeImageHeight,
  changeImageWidth,
  imageData$,
} from '../../models/resizeImage';
import {LabelComponent} from './LabelComponent';

export function ResizeImage() {
  const ref = useRef<HTMLImageElement | null>(null);
  const {
    originalImageHeight,
    originalImageWidth,
    imageUrl,
    labels,
    imageHeight,
    imageWidth,
    positionImageTop,
    positionImageLeft,
  } = useStore(imageData$);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const positionImage = ref.current.getBoundingClientRect();
    changePositionImageTop(positionImage.top);
    changePositionImageLeft(positionImage.left);

    const resizeObserver = new ResizeObserver((entries) =>
      entries.forEach((entry) => {
        if (entry.contentBoxSize) {
          const contentBoxSize = Array.isArray(entry.contentBoxSize)
            ? entry.contentBoxSize[0]
            : entry.contentBoxSize;
          changeImageWidth(contentBoxSize.inlineSize);
          changeImageHeight(contentBoxSize.blockSize);
        } else {
          changeImageWidth(entry.contentRect.width);
          changeImageHeight(entry.contentRect.height);
        }
      }),
    );

    resizeObserver.observe(ref.current);
  });

  const addLabel = (e: MouseEvent<HTMLDivElement>) => {
    const leftPositionLabel = e.pageX;
    const topPositionLabel = e.pageY;
    const topCoordinateInPercent = (topPositionLabel - positionImageTop) / imageHeight;
    const leftCoordinateInPercent = (leftPositionLabel - positionImageLeft) / imageWidth;
    changeLabels([
      ...labels,
      {id: uuidv4(), topCoordinateInPercent, leftCoordinateInPercent, text: ''},
    ]);
  };

  return (
    <S.ImageContainer isVertical={originalImageHeight > originalImageWidth}>
      <S.Image
        ref={ref}
        src={imageUrl}
        alt='image'
        isVertical={originalImageHeight > originalImageWidth}
        onClick={addLabel}
      />
      {labels.map((label) => (
        <LabelComponent label={label} key={label.id} />
      ))}
    </S.ImageContainer>
  );
}
