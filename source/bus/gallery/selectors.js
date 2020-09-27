import { createSelector } from "reselect";
import _ from "lodash";

export const selectPhotos = createSelector(
  ({ gallery }) => gallery.photos,
  (photos) => photos
);

export const selectSelectedPhotoIndex = createSelector(
  ({ gallery }) => gallery.selectedPhotoIndex,
  (selectedPhotoIndex) => selectedPhotoIndex
);

export const selectCurrentPhoto = createSelector(
  selectPhotos,
  selectSelectedPhotoIndex,
  (photos, selectedIndex) => {
    return _.nth(photos, selectedIndex);
  }
);
