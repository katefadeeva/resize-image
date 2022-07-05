import {combine, createDomain, restore} from 'effector';
import {createGate} from 'effector-react';
import {LabelType} from '../../types/resizeImage';

export const domain = createDomain();
export const ResizeImageGate = createGate();

export const changeImageUrl = domain.createEvent<string>();
export const changeOriginalImageWidth = domain.createEvent<number>();
export const changeOriginalImageHeight = domain.createEvent<number>();
export const removeImage = domain.createEvent();
export const changeLabels = domain.createEvent<LabelType[]>();
export const changePositionImageTop = domain.createEvent<number>();
export const changePositionImageLeft = domain.createEvent<number>();
export const changeImageWidth = domain.createEvent<number>();
export const changeImageHeight = domain.createEvent<number>();

export const imageUrl$ = restore(changeImageUrl, '');
export const originalImageWidth$ = restore(changeOriginalImageWidth, 0);
export const originalImageHeight$ = restore(changeOriginalImageHeight, 0);
export const labels$ = restore(changeLabels, []);
export const positionImageTop$ = restore(changePositionImageTop, 0);
export const positionImageLeft$ = restore(changePositionImageLeft, 0);
export const imageWidth$ = restore(changeImageWidth, 0);
export const imageHeight$ = restore(changeImageHeight, 0);

export const imageData$ = combine({
  imageUrl: imageUrl$,
  originalImageWidth: originalImageWidth$,
  originalImageHeight: originalImageHeight$,
  labels: labels$,
  positionImageTop: positionImageTop$,
  positionImageLeft: positionImageLeft$,
  imageWidth: imageWidth$,
  imageHeight: imageHeight$,
});
