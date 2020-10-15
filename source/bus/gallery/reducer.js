import photo1 from '../../theme/assets/photos/1.jpeg';
import photo2 from '../../theme/assets/photos/2.jpeg';
import photo3 from '../../theme/assets/photos/3.jpeg';
import photo4 from '../../theme/assets/photos/4.jpeg';
import { SHOW_NEXT_PHOTO, SHOW_PHOTO, SHOW_PREV_PHOTO } from './types';

const galleryInitialState = {
    photos:             [photo1, photo2, photo3, photo4],
    selectedPhotoIndex: 0,
};

export const galleryReducer = (state = galleryInitialState, action) => {
    switch (action.type) {
        case SHOW_NEXT_PHOTO:
            return {
                ...state,
                selectedPhotoIndex:
                    (state.selectedPhotoIndex + 1) % state.photos.length,
            };
        case SHOW_PREV_PHOTO:
            return {
                ...state,
                selectedPhotoIndex:
                    (state.photos.length + (state.selectedPhotoIndex - 1)) %
                    state.photos.length,
            };
        case SHOW_PHOTO:
            return {
                ...state,
                selectedPhotoIndex: payload % state.photos.length,
            };
        default: {
            return state;
        }
    }
};

export default galleryReducer;
