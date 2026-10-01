import Image from "next/image";

import { creatorBenefits, growthStats } from "@/content/growth-features";

const courseAvatars = ["/figma/features/image-02.png", "/figma/features/image-03.png", "/figma/features/image-05.png", "/figma/features/image-06.png"];
const studentAvatars = [ "/figma/features/image-12.png", "/figma/features/image-13.png", "/figma/features/image-14.png", "/figma/features/image-15.png", "/figma/features/image-16.png", "/figma/features/image-19.png"];
const artShadow = "drop-shadow-[0_18px_22px_rgba(17,24,39,0.12)]";
const headingClassName = "font-poppins text-[44px] font-semibold leading-[120%] tracking-[-0.44px] text-[#242528]";

function SignalIcon() { return <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0H12.5V13.3333H10V0ZM0 8.33333H2.5V13.3333H0V8.33333ZM5 4.16667H7.5V13.3333H5V4.16667Z" fill="#4B4C53"/>
</svg>

}
function StarIcon() { return <svg aria-hidden="true" className="size-full" fill="currentColor" viewBox="0 0 24 24"><path d="m12 17.27 4.15 2.51-1.1-4.72 3.67-3.18-4.83-.41L12 7l-1.89 4.47-4.83.41 3.67 3.18-1.1 4.72L12 17.27Z" /></svg>; }
function CheckIcon() { return <svg aria-hidden="true" className="size-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>; }

function CourseCard() {
  return <article className="absolute left-0 top-0 z-10 h-[384px] w-[373px] overflow-hidden rounded-[24px] border border-[#ced0d3] bg-white">
    <div className="relative mx-[15px] mt-[15px] h-[195px] overflow-hidden rounded-xl"><Image alt="Course design preview" className="object-cover" fill sizes="341px" src="/figma/features/image-01.jpeg" /><div className="absolute bottom-3 left-3 flex gap-3 whitespace-nowrap text-xs font-medium leading-5 text-[#4f4f4f]">{["17 Lessons", "2 hours 16 mins", "59 Comments"].map((label) => <span className="rounded-full bg-[#f6f6f699] px-3 py-1.5 backdrop-blur" key={label}>{label}</span>)}</div></div>
    <div className="absolute left-[15px] top-[231px] flex flex-col gap-4"><div><h3 className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-0.2px] text-black">Learn Figma from Basic</h3><p className="font-satoshi text-[16px] font-normal leading-[160%] text-[#4f4f4f]">by <span className="text-[#003be2]">purepearl studio</span></p></div><div className="flex items-center gap-3"><span className="flex items-center gap-1 rounded-full bg-[#f5f5f6] px-3 py-1.5 text-xs font-medium leading-5 text-[#4b4c53]"><SignalIcon />Beginner</span>
    
    <div className="flex items-center">{courseAvatars.map((src) => <Image alt="" className="-mr-2 size-8  rounded-full" height={32} key={src} src={src} width={32} />)}
    
    <span className="relative ml-2 flex size-8 items-center justify-center rounded-full bg-[#003be2] text-xs font-medium text-white">26+</span>
    </div>
    
    </div><p className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-0.2px] text-[#003be2]"><span className="font-medium">$</span>25<span className="font-satoshi text-[16px] font-normal leading-[160%] tracking-normal text-[#4f4f4f]">/lifetime</span></p></div>
    <p className="absolute right-[15px] top-[231px] flex items-center text-lg font-medium leading-7 text-[#4f4f4f]">4.5 <span className="ml-1 size-6 text-[#d4fb20]"><StarIcon /></span></p>
  </article>;
}

function LearningVisual() {
  return (
    <div className="relative z-0 h-[552px] w-[621px] shrink-0">
      <div className="absolute inset-0 z-0">
        <CourseCard />
      </div>

      <div className={`absolute left-0 top-3 z-0 ${artShadow}`}>
        <Image alt="Learner holding a laptop" className="h-[540px] w-[577px] object-cover" height={483} src="/figma/features/image-10.png" width={516} />
      </div>

      <div className="absolute right-0 top-[200px] z-20 flex w-[232px] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]">
        <p className="text-sm font-medium leading-6 text-[#242528]">Learning Progress</p>
        <div className="w-[200px]">
          <p className="font-poppins text-[44px] font-semibold leading-[120%] tracking-[-0.48px] text-[#242528]">55%</p>
        </div>
        <div className="h-2 w-[200px] rounded-full bg-[#f6f6f6]">
          <div className="h-full w-[112px] rounded-full bg-[#d4fb20]" />
        </div>
      </div>

      <div
        aria-hidden
        className="absolute left-[445px] top-[55px] z-30 size-[215px] bg-[#D4FB20]"
        style={{
          maskImage: "url('/figma/features/image-09.png')",
          maskPosition: "center",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskImage: "url('/figma/features/image-09.png')",
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
        }}
      />
    </div>
  );
}

function RevenueCard({ compact = false }: { compact?: boolean }) {
  return <div className={`flex flex-col gap-2 rounded-2xl bg-[#003be2] p-4 text-[#f5f5f6] backdrop-blur-[10px] ${compact ? "w-[134px]" : "w-[232px]"}`}><div><p className="text-base font-medium leading-[1.2]">{compact ? "Year to Date" : "Total Revenue"}</p><p className="text-[10px] leading-[1.2]">{compact ? "2023" : "July 1-28"}</p></div>{compact ? <><p className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-0.24px]">$1,200.38</p><span className="w-fit rounded-full bg-[#cbfc01] px-2 py-0.5 text-[10px] font-medium leading-5 text-[#242528]">+12$</span></> : <><div className="flex w-[200px] items-center justify-between"><p className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-0.24px]">$120.29</p>
  </div><div className="h-2 w-[200px] rounded-full bg-white"><div className="h-full w-[112px] rounded-full bg-[#d4fb20]" /></div></>}</div>;
}

function CreatorVisual() {
  return (
    <div className="relative z-0 h-[596px] w-[541px] shrink-0">
      <div className="absolute left-[-60px] top-11 z-0">
        <RevenueCard />
      </div>
      <div className="absolute left-[-60px] top-[194px] z-0">
        <RevenueCard compact />
      </div>

      <div className={`absolute left-[-25px] top-0 z-0 ${artShadow}`}>
        <Image alt="Creator holding a tablet" className="h-[596px] w-[435px] object-cover" height={500} src="/figma/features/image-18.png" width={500} />
      </div>

      <div className="absolute left-[283px] top-[413px] z-20 flex w-[258px] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]">
        <div>
          <p className="text-base font-medium leading-6 text-[#242528]">Happy Students</p>
          <p className="text-[10px] leading-[1.5] text-[#82868e]">
            <strong className="text-[#242528]">4.5 </strong>(240)
            <span className="inline-block size-4 align-middle text-[#d4fb20]">
              <StarIcon />
            </span>
          </p>
        </div>

        <div className="flex">
          {studentAvatars.map((src) => (
            <Image alt="" className="-mr-4 size-[43px] rounded-full" height={43} key={src} src={src} width={43} />
          ))}
          <span className="ml-0 flex size-[43px] items-center justify-center rounded-full bg-[#d4fb20] text-xs font-bold text-[#242528]">
            2K+
          </span>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute left-[230px] top-[80px] z-30 size-[215px] bg-[#D4FB20]"
        style={{
          maskImage: "url('/figma/features/image-17.png')",
          maskPosition: "center",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskImage: "url('/figma/features/image-17.png')",
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
        }}
      />
    </div>
  );
}

export function GrowthFeatures() {
  return <section className="relative overflow-hidden bg-[#fafafa] px-5 py-20 lg:px-[max(2rem,calc((100vw-1198px)/2))] lg:py-[120px]"><Image alt="" aria-hidden className="pointer-events-none absolute left-[-549px] top-[-506px] max-w-none" height={2471} src="/figma/features/growth-background.svg" width={2536} /><Image alt="" aria-hidden className="pointer-events-none absolute left-[-327px] top-[906px] max-w-none" height={752} src="/figma/features/growth-secondary-glow.svg" width={752} /><div className="relative mx-auto flex max-w-[1198px] flex-col gap-20 lg:gap-[72px]"><div className="grid items-center gap-14 lg:grid-cols-[574px_621px] lg:gap-[63px]"><div className="flex flex-col gap-10"><h2 className={headingClassName}>Your Path to Professional Growth Starts Here!</h2><p className="max-w-[477px] font-satoshi text-[18px] font-normal leading-[160%] text-[#4b4c53]">Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p><dl className="flex gap-14">{growthStats.map(({ value, label }) => <div key={label}><dt className="font-poppins text-[36px] font-semibold leading-[120%] tracking-[-0.36px] text-[#003be2]">{value}</dt><dd className="font-satoshi text-[18px] font-normal leading-[160%] text-[#4b4c53]">{label}</dd></div>)}</dl></div><div className="origin-center scale-[min(1,calc((100vw-40px)/621))] lg:scale-100"><LearningVisual /></div></div><div className="grid items-center gap-14 lg:grid-cols-[541px_580px] lg:gap-[79px]"><div className="order-2 origin-center scale-[min(1,calc((100vw-40px)/541))] lg:order-1 lg:scale-100"><CreatorVisual /></div><div className="order-1 flex flex-col gap-10 lg:order-2"><h2 className={`${headingClassName} max-w-[391px]`}>Create &amp; Manage Courses Easily.</h2><p className="max-w-[574px] font-satoshi text-[18px] font-normal leading-[160%] text-[#4b4c53]"><strong className="text-[#242528]">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.</p><ul className="flex flex-col gap-4">{creatorBenefits.map((item) => <li className="flex items-end gap-2 font-satoshi text-[18px] font-normal leading-[160%] text-[#242528]" key={item}><span className="size-6 shrink-0 text-[#003be2]"><CheckIcon /></span>{item}</li>)}</ul></div></div></div></section>;
}
