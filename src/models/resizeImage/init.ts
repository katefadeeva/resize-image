import {
  clearImage,
  image$,
  locationImageLeft$,
  locationImageTop$,
  marks$,
  originalHeight$,
  originalWidth$, imageHeight$, imageWidth$
} from "./index";

image$.reset(clearImage);
originalWidth$.reset(clearImage);
originalHeight$.reset(clearImage);
marks$.reset(clearImage);
locationImageTop$.reset(clearImage);
locationImageLeft$.reset(clearImage);
imageWidth$.reset(clearImage);
imageHeight$.reset(clearImage);
