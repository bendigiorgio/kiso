export const getColor = (
  categoryMap: Map<string, string>,
  category: string
) => {
  return categoryMap.get(category) ?? "#4f46e5";
};
