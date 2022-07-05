import {
  removeImage,
  imageUrl$,
  positionImageLeft$,
  positionImageTop$,
  labels$,
  originalImageHeight$,
  originalImageWidth$,
  imageHeight$,
  imageWidth$,
  domain,
  ResizeImageGate,
} from './index';

domain.onCreateStore((store) => store.reset(ResizeImageGate.close));

imageUrl$.reset(removeImage);
originalImageWidth$.reset(removeImage);
originalImageHeight$.reset(removeImage);
labels$.reset(removeImage);
positionImageTop$.reset(removeImage);
positionImageLeft$.reset(removeImage);
imageWidth$.reset(removeImage);
imageHeight$.reset(removeImage);
