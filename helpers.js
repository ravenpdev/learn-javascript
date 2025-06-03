export function capitalize(word) {
  return word.slice(0, 1).toLocaleUpperCase() + word.slice(1);
  // return word.substring(0, 1).toLocaleUpperCase() + word.substring(1);
}
