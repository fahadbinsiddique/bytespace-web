import Image from "next/image";

type OrnamentTint = "neonLime" | "offWhite";

type OrnamentConfig = {
  className: string;
  image: string;
  tint: OrnamentTint;
};

const ornaments = [
  { className: "left-[calc(50%+360px)] top-0 h-[188px] w-[188px] ", image: "/figma/cta/image-01.png", tint: "neonLime" },
  { className: "left-[calc(50%+390px)] top-[289px] h-[330px]  w-[330px]", image: "/figma/cta/image-02.png", tint: "neonLime" },
  { className: "left-[calc(50%-822px)] top-[-145px] h-[385px] w-[385px]", image: "/figma/cta/image-03.png", tint: "neonLime" },
  { className: "left-[calc(50%-542px)] top-[5px]  h-[175px] w-[175px] -scale-x-100 rotate-150", image: "/figma/cta/image-02.png", tint: "offWhite" },
  { className: "left-[calc(50%-740px)] top-[225px] h-[188px] w-[178px] rotate-360 ", image: "/figma/cta/image-05.png", tint: "offWhite" },
  { className: "left-[calc(50%-700px)] top-[299px] h-[342px] w-[342px]", image: "/figma/cta/image-09.png", tint: "neonLime" },
  { className: "left-[calc(50%+506px)] top-[6px] h-[370px] w-[370px]", image: "/figma/cta/image-08.png", tint: "offWhite" },
] satisfies readonly OrnamentConfig[];

const tintFilters = {
  neonLime: "brightness(0) saturate(100%) invert(56%) sepia(14%) saturate(2343%) hue-rotate(30deg) brightness(1.73) contrast(0.78)",
  offWhite: "brightness(0) saturate(100%) invert(98%) sepia(6%) saturate(179%) hue-rotate(202deg) brightness(118%) contrast(92%)",
};

function Ornament({ className, image, tint }: OrnamentConfig) {
  return (
    <div aria-hidden="true" className={`absolute ${className}`}>
      <Image alt="" className="object-cover" fill sizes="370px" src={image} style={{ filter: tintFilters[tint] }} />
    </div>
  );
}

export function NewCta() {
  return (
    <section className="relative isolate h-[488px] overflow-hidden bg-[#003be2] px-5 text-[#f5f5f6] sm:px-8" id="join">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[1024px] w-[1440px] -translate-x-1/2">
        <Image alt="" className="absolute -top-[2px] left-0 max-w-none" height={1026} src="/figma/cta/grid.svg" width={1442} />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {ornaments.map((ornament, index) => <Ornament {...ornament} key={index} />)}
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[964px] flex-col items-center justify-center gap-10 text-center">
        <h2 className="max-w-[710px] font-poppins text-[36px] font-semibold leading-[120%] tracking-[-0.44px] sm:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[964px] font-satoshi text-[16px] font-normal leading-[160%] sm:text-[18px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <a className="rounded-[24px] bg-[#d4fb20] px-6 py-3 font-satoshi text-[16px] font-normal leading-[160%] text-[#242528]" href="#join">
          Join as Creator
        </a>
      </div>
    </section>
  );
}
