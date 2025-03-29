export const categoryKeys = [
  "all", "costumes", "dresses", "shirts", "skirts",
  "sweaters", "pants", "jackets", "tops", "outerwear", "shorts"
];

/**
 * Перекладає ключ категорії (наприклад "dresses") у відповідну мову
 * @param {string} key — ключ категорії
 * @param {function} translateList — функція з useLanguage()
 * @returns {string} — перекладене значення
 */
export const translateCategory = (key, translateList) => {
  const categories = translateList("Filtersidebar", "Categories");
  const index = categoryKeys.indexOf(key?.toLowerCase());
  return index !== -1 ? categories[index] : key;
};
