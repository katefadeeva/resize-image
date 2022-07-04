import {combine, createDomain, restore} from "effector";
import {createGate} from "effector-react";
import {MarkType} from "../../components/ResizeImage";

export const domain = createDomain();
export const ResizeImageGate = createGate();

export const changeImage = domain.createEvent<string>();
export const changeOriginalWidth = domain.createEvent<number>();
export const changeOriginalHeight = domain.createEvent<number>();
export const clearImage = domain.createEvent();
export const changeMarks = domain.createEvent<MarkType[]>();
export const changeLocationImageTop = domain.createEvent<number>();
export const changeLocationImageLeft = domain.createEvent<number>();
export const changeImageWidth = domain.createEvent<number>();
export const changeImageHeight = domain.createEvent<number>();

export const image$ = restore(changeImage,'');
export const originalWidth$ = restore(changeOriginalWidth, 0);
export const originalHeight$ = restore(changeOriginalHeight,0);
export const marks$ = restore(changeMarks, []);
export const locationImageTop$ = restore(changeLocationImageTop, 0);
export const locationImageLeft$ = restore(changeLocationImageLeft, 0);
export const imageWidth$ = restore(changeImageWidth, 0);
export const imageHeight$ = restore(changeImageHeight, 0);

export const size$ = combine({
  image: image$,
  originalWidth: originalWidth$,
  originalHeight: originalHeight$,
  marks: marks$,
  imageTop: locationImageTop$,
  imageLeft: locationImageLeft$,
  imageWidth: imageWidth$,
  imageHeight: imageHeight$,
})
