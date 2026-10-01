import Image from "next/image";

import { learningCategories } from "@/content/learning-categories";

export function LearningCategories() {
  return (
    <section className="px-5 py-20 text-center">
      <div className="mx-auto max-w-[917px]">
        <h2 className="font-poppins text-[36px] font-semibold leading-[120%] tracking-tight text-[#040819] sm:text-[44px]">Explore Diverse Learning Paths at Bytespace</h2>
        <p className="mt-4 font-satoshi text-[16px] font-normal leading-[160%] text-[#82868e]">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.</p>
      </div>
      <div className="mx-auto mt-14 grid max-w-[1202px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
        {learningCategories.map((category) => (
          <article className="grid aspect-square place-items-center rounded-[24px] border border-[#ced0d3] p-4" key={category.name}>
            <div>
              <span className="mx-auto grid size-[72px] place-items-center rounded-full bg-[#d4fb20]"><Image alt="" height={36} src={category.icon} width={36} /></span>
              <p className="mt-3 font-satoshi text-[16px] font-normal leading-[160%] text-[#242528]">{category.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
