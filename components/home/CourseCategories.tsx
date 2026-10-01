"use client";

import { useState } from "react";

const desktopRows = [
  {
    categories: [
      "Featured",
      "Music",
      "Drawing & Painting",
      "Marketing",
      "Animation",
      "Social Media",
      "UI/UX Design",
      "Creative Marketing",
    ],
    layout: "w-[1086px] items-start",
  },
  {
    categories: [
      "Digital Illustration",
      "Film & Video",
      "Crafts",
      "Freelance & Entrepreneurship",
      "Graphic Design",
      "Photography",
    ],
    layout: "w-[952px] items-start",
  },
  {
    categories: ["Productivity", "Web Development", "Data Science", "Cooking"],
    layout: "w-[622px] items-center",
  },
];

export function CourseCategories() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section
      className="w-full bg-white px-4 py-8 sm:py-10"
      aria-labelledby="courses-heading"
    >
      <div className="mx-auto flex w-full max-w-[1086px] flex-col items-center gap-4">
        <div className="flex min-h-[180px] w-full max-w-[917px] flex-col items-center justify-center gap-4 text-center">
          <h2
            id="courses-heading"
            className="w-full max-w-[588px] font-poppins text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#040819] sm:text-[44px]"
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="w-full max-w-[1300px] font-satoshi text-[18px] font-normal leading-[160%] text-[#82868e]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        <nav aria-label="Course categories" className="w-full mt-6 max-w-[1086px]">
          <div className="hidden flex-col items-center gap-4 min-[1120px]:flex">
            {desktopRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`${row.layout} flex h-[43px] shrink-0 justify-center gap-4`}
              >
                {row.categories.map((category) => (
                  <CategoryButton
                    key={category}
                    label={category}
                    active={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  />
                ))}

                {rowIndex === desktopRows.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setActiveCategory("More")}
                    aria-pressed={activeCategory === "More"}
                    className="flex h-9 shrink-0 flex-row items-center whitespace-nowrap px-2 font-satoshi text-[16px] font-normal leading-[160%] text-[#003be2] transition-colors hover:text-[#002bb0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003be2] min-[1120px]:h-[43px]"
                  >
                    + More
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 min-[1120px]:hidden">
            {desktopRows.flatMap((row) => row.categories).map((category) => (
              <CategoryButton
                key={category}
                label={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}

            <button
              type="button"
              onClick={() => setActiveCategory("More")}
              aria-pressed={activeCategory === "More"}
              className="flex h-9 shrink-0 items-center whitespace-nowrap rounded-sm px-2 font-satoshi text-[16px] font-normal leading-[160%] text-[#003be2] transition-colors hover:text-[#002bb0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003be2]"
            >
              + More
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}


function CategoryButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`
        rounded-full
        border
        h-9
        shrink-0
        px-3
        font-satoshi
        text-[16px]
        leading-[160%]
        font-normal
        transition-colors
        duration-150
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[#040819]
        min-[1120px]:h-[43px]
        min-[1120px]:px-4
        ${
          active
            ? "border-[#D4FB20] bg-[#D4FB20] text-[#07101D]"
            : "border-[#f1f2f3] bg-[#f1f2f3] text-[#4B4C53] hover:border-[#d4fb20] hover:bg-[#d4fb20] hover:text-[#07101d]"
        }
      `}
    >
      {label}
    </button>
  );
}
