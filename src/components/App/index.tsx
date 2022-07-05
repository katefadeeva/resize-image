import React, {ChangeEvent, useRef} from 'react';
import {useGate, useStore} from 'effector-react';
import * as S from './styled';
import {ResizeImage} from '../ResizeImage';
import {
  changeImageUrl,
  changeOriginalImageHeight,
  changeOriginalImageWidth,
  removeImage,
  imageUrl$,
  ResizeImageGate,
} from '../../models/resizeImage';

export function App() {
  useGate(ResizeImageGate);
  const image = useStore(imageUrl$);
  const refInput = useRef<HTMLInputElement | null>(null);

  const onUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const URL = window.URL || window.webkitURL;
      const img = new Image();
      img.onload = () => {
        changeOriginalImageHeight(img.naturalHeight || img.height);
        changeOriginalImageWidth(img.naturalWidth || img.width);
      };
      img.src = URL.createObjectURL(event.target.files[0]);
      changeImageUrl(img.src);
    }
  };

  const resetFile = () => {
    if (!refInput.current) {
      return;
    }
    removeImage();
    refInput.current.value = '';
  };

  return (
    <S.MainContainer>
      <S.Header>
        <S.Title>Resize Image</S.Title>
        <S.ActionContainer>
          <input
            ref={refInput}
            type='file'
            accept='image/*'
            onChange={onUploadFile}
            disabled={!!image}
          />
          <button type='button' onClick={resetFile} disabled={!image}>
            Remove image
          </button>
        </S.ActionContainer>
      </S.Header>
      {image && <ResizeImage />}
    </S.MainContainer>
  );
}
