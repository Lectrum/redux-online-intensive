export const selectPhotos = (state) => state.gallery.photos;

export const selectSelectedPhotoIndex = (state) =>
  state.gallery.selectedPhotoIndex;

export const selectCurrentPhoto = (state) => {
  let photos = selectPhotos(state);
  let selectedIndex = selectSelectedPhotoIndex(state);
  return selectedIndex > photos.length ? photos[0] : photos[selectedIndex];
};
