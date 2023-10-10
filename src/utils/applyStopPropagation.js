export const applyStopPropagation = (e, callback) => {
  e.stopPropagation();
  callback();
};
