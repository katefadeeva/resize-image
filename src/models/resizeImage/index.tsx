import {combine, createDomain, restore} from "effector";
import {createGate} from "effector-react";

export const domain = createDomain();
export const ResizeImageGate = createGate();

export const changeImage = domain.createEvent<string>();
export const changeOriginalWidth = domain.createEvent<number>();
export const changeOriginalHeight = domain.createEvent<number>();
export const clearImage = domain.createEvent();

export const image$ = restore(changeImage,'');
export const originalWidth$ = restore(changeOriginalWidth, 0);
export const originalHeight$ = restore(changeOriginalHeight,0);

export const size$ = combine({
  image: image$,
  originalWidth: originalWidth$,
  originalHeight: originalHeight$,
})
