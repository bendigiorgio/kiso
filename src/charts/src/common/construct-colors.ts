export const constructColors = (colors: string[], categories: string[]) => {
  const categoryColors = new Map<string, string>();
  categories.forEach((category, idx) => {
    categoryColors.set(category, colors[idx]);
  });
  return categoryColors;
};
