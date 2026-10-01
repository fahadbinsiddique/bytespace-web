import Image from "next/image";

import { courseCardMeta, featuredCourses, type Course } from "@/content/courses";

function SignalIcon() {
  return (
    <svg aria-hidden="true" className="size-[13px]" fill="none" viewBox="0 0 13 14">
      <path d="M10 0h2.5v13.333H10V0ZM0 8.333h2.5v5H0v-5ZM5 4.167h2.5v9.166H5V4.167Z" fill="currentColor" />
    </svg>
  );
}

const courseAvatars = ["/figma/features/image-02.png", "/figma/features/image-03.png", "/figma/features/image-05.png", "/figma/features/image-06.png"];

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4297 9.61158L12.9597 4.77158C12.6697 3.82158 11.3297 3.82158 11.0497 4.77158L9.56971 9.61158H5.11971C4.14971 9.61158 3.74971 10.8616 4.53971 11.4216L8.17972 14.0216L6.74971 18.6316C6.45971 19.5616 7.53972 20.3116 8.30972 19.7216L11.9997 16.9216L15.6897 19.7316C16.4597 20.3216 17.5397 19.5716 17.2497 18.6416L15.8197 14.0316L19.4597 11.4316C20.2497 10.8616 19.8497 9.62158 18.8797 9.62158H14.4297V9.61158Z" fill="#CED0D3"/>
</svg>

  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="min-h-[384px] rounded-[24px] border border-[#ced0d3] bg-white p-[15px]">
      <div className="relative h-[195px] overflow-hidden rounded-xl">
        <Image alt="" className="object-cover" fill sizes="(max-width: 767px) 100vw, 341px" src={course.image} />
        <div className="absolute bottom-3 left-3 flex gap-2 text-[10px] text-[#4b4c53]">
          {courseCardMeta.map((item) => <span className="rounded-full bg-white/70 px-2 py-1 backdrop-blur" key={item}>{item}</span>)}
        </div>
      </div>
      <div className="relative pt-4">
        <div className="pr-12"><h3 className="font-poppins text-[20px] font-semibold leading-[120%] text-[#242528]">{course.title}</h3><p className="font-satoshi text-[16px] font-normal leading-[160%] text-[#4b4c53]">by <span className="text-[#003be2]">purepearl studio</span></p></div>
        <span className="absolute flex items-center right-0 top-4 text-sm text-[#4b4c53]">4.5 <StarIcon/></span>

        <div className="mt-3 flex items-center  gap-3">
          <span className="flex items-center gap-1 rounded-full bg-[#f5f5f6] px-3 py-1.5 text-xs font-medium leading-5 text-[#4b4c53]"><SignalIcon /> Beginner</span>

          <div className="flex  items-center ">
            {courseAvatars.map((src) => <Image alt="" className="-mr-2 size-8 rounded-full" height={32} key={src} src={src} width={32} />)}
            <span className="relative ml-2 flex size-8 items-center justify-center rounded-full bg-[#d4fb20] text-xs font-medium text-black">26+</span>
          </div>

          </div>
          <div className="mt-4 font-poppins text-[20px] font-semibold leading-[120%] text-[#003be2]">$25<small className="font-satoshi text-[16px] font-normal leading-[160%] text-[#4b4c53]"> /lifetime</small></div>
      </div>
    </article>
  );
}

export function FeaturedCourses() {
  return (
    <section className="px-5 pb-24" id="courses">
      <div className="mx-auto grid max-w-[1200px] gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {featuredCourses.map((course) => <CourseCard course={course} key={course.title} />)}
      </div>
    </section>
  );
}
