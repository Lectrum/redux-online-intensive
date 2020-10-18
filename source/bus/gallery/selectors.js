
export const gallerySelectors = {

    selectPhotos: (state) => state.gallery.photos,

    selectSelectedPhotoIndex: (state) =>
        state.gallery.selectedPhotoIndex,

    selectCurrentPhoto: (state) => {
        const photos = gallerySelectors.selectPhotos(state);
        const selectedIndex = gallerySelectors.selectCurrentPhoto(state);

        return selectedIndex > photos.length ? photos[0] : photos[selectedIndex];
    },
};
