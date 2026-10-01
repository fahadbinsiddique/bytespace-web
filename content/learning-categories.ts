export type LearningCategory = {
  name: string;
  icon: string;
};

export const learningCategories: readonly LearningCategory[] = [
  { name: "Design", icon: "/figma/categories/icon-01.svg" },
  { name: "Development", icon: "/figma/categories/icon-02.svg" },
  { name: "IT & Software", icon: "/figma/categories/icon-03.svg" },
  { name: "Business", icon: "/figma/categories/icon-04.svg" },
  { name: "Marketing", icon: "/figma/categories/icon-05.svg" },
  { name: "Photography", icon: "/figma/categories/icon-06.svg" },
];
