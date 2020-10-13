import photo1 from '../../theme/assets/photos/1.jpeg';
import photo2 from '../../theme/assets/photos/2.jpeg';
import photo3 from '../../theme/assets/photos/3.jpeg';
import photo4 from '../../theme/assets/photos/4.jpeg';
import { SHOW_NEXT_PHOTO, SHOW_PHOTO, SHOW_PREV_PHOTO } from './types';

const galleryInitialState = {
    photos: [photo1, photo2, photo3, photo4],
    selectedPhotoIndex: 0
};

export const galleryReducer = (state = galleryInitialState, action) => {
    let nextIndex = 0;

    switch (action.type) {
        case SHOW_NEXT_PHOTO:
            nextIndex =
                state.selectedPhotoIndex + 1 > state.photos.length - 1
                    ? state.selectedPhotoIndex
                    : state.selectedPhotoIndex + 1;

            return {
                ...state,
                selectedPhotoIndex: nextIndex
            };
        case SHOW_PREV_PHOTO:
            nextIndex =
                state.selectedPhotoIndex - 1 < 0
                    ? state.selectedPhotoIndex
                    : state.selectedPhotoIndex - 1;

            return {
                ...state,
                selectedPhotoIndex: nextIndex
            };
        case SHOW_PHOTO:
            let requestedIndex = parseInt(action.payload);

            nextIndex =
                requestedIndex > state.photos.length - 1 || requestedIndex < 0
                    ? state.selectedPhotoIndex
                    : requestedIndex;

            return {
                ...state,
                selectedPhotoIndex: nextIndex
            };
        default: {
            return state;
        }
    }
};

export default galleryReducer;
