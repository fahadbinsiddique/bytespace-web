import Image from "next/image";

import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fafafa] px-5 py-20 sm:px-8 lg:h-[784px] lg:px-0 lg:py-[74px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image alt="" className="absolute left-[calc(50%+82px)] top-[-281px] max-w-none" height={1217} priority src="/figma/testimonials/spotlight-top-right.svg" width={1217} />
        <Image alt="" className="absolute left-[calc(50%-365px)] top-[-178px] max-w-none" height={752} priority src="/figma/testimonials/spotlight-top.svg" width={752} />
        <Image alt="" className="absolute left-[calc(50%-1202px)] top-[109px] max-w-none" height={1217} priority src="/figma/testimonials/spotlight-left.svg" width={1217} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1204px] flex-col gap-14 lg:gap-[72px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2 className="max-w-[577px] font-poppins text-[36px] font-semibold leading-[120%] tracking-[-0.44px] text-black sm:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] font-satoshi text-[16px] font-normal leading-[160%] text-[#4f4f4f] sm:text-[18px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map(({ name, role, quote, portrait }) => (
            <article className="min-h-[406px] rounded-[24px] bg-white p-6 sm:min-h-[432px]" key={name}>
              <Image alt="" className="size-20 rounded-full object-cover" height={80} src={portrait} width={80} />
              <div className="mt-6">
                <h3 className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-0.2px] text-black">{name}</h3>
                <p className="font-satoshi text-[18px] font-normal leading-[160%] text-[#003be2]">{role}</p>
              </div>
              <p className="mt-6 max-w-[326px] font-satoshi text-[16px] font-normal leading-[160%] text-[#4f4f4f] sm:text-[18px]">
                &quot;{quote}&quot;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
