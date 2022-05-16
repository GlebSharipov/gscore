export const capitalize = (value: string) => {
  const word = value.toLowerCase();

  return word.charAt(0).toUpperCase() + word.slice(1);
};
