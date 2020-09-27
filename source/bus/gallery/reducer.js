import { handleActions } from "redux-actions";
import { showNextPhoto, showPhoto, showPrevPhoto } from "./actions";

import photo1 from "../../theme/assets/photos/1.jpeg";
import photo2 from "../../theme/assets/photos/2.jpeg";
import photo3 from "../../theme/assets/photos/3.jpeg";
import photo4 from "../../theme/assets/photos/4.jpeg";

const galleryInitialState = {
  photos: [photo1, photo2, photo3, photo4],
  selectedPhotoIndex: 0,
};

export const gallery = handleActions(
  {
    [showNextPhoto.toString()]: (state, { payload }) => {
      return {
        ...state,
        selectedPhotoIndex:
          (state.selectedPhotoIndex + 1) % state.photos.length,
      };
    },
    [showPrevPhoto.toString()]: (state, { payload }) => {
      return {
        ...state,
        selectedPhotoIndex:
          (state.photos.length + (state.selectedPhotoIndex - 1)) %
          state.photos.length,
      };
    },
    [showPhoto.toString()]: (state, { payload }) => {
      return {
        ...state,
        selectedPhotoIndex: payload % state.photos.length,
      };
    },
  },
  galleryInitialState
);

export default gallery;
