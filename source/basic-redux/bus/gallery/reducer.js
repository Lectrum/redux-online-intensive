// Photos
import photo1 from '../../../theme/assets/photos/1.jpeg';
import photo2 from '../../../theme/assets/photos/2.jpeg';
import photo3 from '../../../theme/assets/photos/3.jpeg';
import photo4 from '../../../theme/assets/photos/4.jpeg';

// Types
import {
    SHOW_NEXT_PHOTO,
    SHOW_PREVIOUS_PHOTO,
    SHOW_SELECTED_PHOTO
} from './types';

const initialState = {
    photos: [
        { id: '1', url: photo1 },
        { id: '2', url: photo2 },
        { id: '3', url: photo3 },
        { id: '4', url: photo4 }
    ],
    selectedPhotoIndex: 0,
};

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NEXT_PHOTO:
            if (state.selectedPhotoIndex === state.photos.length - 1) {
                return state;
            }

            return {
                ...state,
                selectedPhotoIndex: state.selectedPhotoIndex + 1,
            };

        case SHOW_PREVIOUS_PHOTO:
            if (state.selectedPhotoIndex === 0) {
                return state;
            }

            return {
                ...state,
                selectedPhotoIndex: state.selectedPhotoIndex - 1,
            };

        case SHOW_SELECTED_PHOTO:
            return {
                ...state,
                selectedPhotoIndex: Number(action.payload),
            };

        default:
            return state;
    }
};
