"use client";

import { ICategoryItem } from "@/models/general";
import CategoryCard from "../CategoryCard/index.tsx";
import { CategoryItems } from "../HeaderMenu/Menu";

const CategorySection = () => {
  return (
    <div className="flex w-full flex-col md:flex-row gap-2">
      {CategoryItems.map((item: ICategoryItem) => (
        <CategoryCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default CategorySection;
