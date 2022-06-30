import React, {ChangeEvent} from 'react';
import {useStore} from "effector-react";
import * as S from './styled';
import {ImageResize} from "../ResizeImage";
import {changeImage, changeOriginalHeight, changeOriginalWidth, clearImage, image$} from "../../models/resizeImage";

export function App() {
  const image = useStore(image$);
  const onUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const _URL = window.URL || window.webkitURL;
      const img = new Image();
      img.onload = function () {
        changeOriginalHeight(img.naturalHeight || img.height);
        changeOriginalWidth(img.naturalWidth || img.width);
      };
      img.src = _URL.createObjectURL(event.target.files[0]);
      changeImage(img.src);
    }
  };
  return (
    <S.MainContainer>
      <S.Header>
        <S.Title>Image Resize</S.Title>
        <S.ActionContainer>
          <input type="file" accept="image/*" onChange={onUploadFile} disabled={!!image}/>
          <button type='button' onClick={() => clearImage()} disabled={!image}>Удалть картинку</button>
        </S.ActionContainer>
      </S.Header>
      {image && <ImageResize />}
    </S.MainContainer>
  );
}
