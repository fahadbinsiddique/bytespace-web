import Image from "next/image";

type OrnamentProps = {
  className: string;
  color: "bg-[#d4fb20]" | "bg-[#f5f5f6]";
  mask: string;
  source: string;
};

const avatars = Array.from({ length: 7 }, (_, index) => `/hero/avatar-${index + 1}.png`);

const navLinkClassName =
  "inline-block transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:font-medium focus-visible:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4fb20]";

function Ornament({ className, color, mask, source }: OrnamentProps) {
  return (
    <div aria-hidden="true" className={`absolute -translate-x-1/2 ${className}`}>
      <Image alt="" className="object-cover" fill sizes="400px" src={source} />
      <div
        className={`absolute inset-0 ${color} mix-blend-hard-light [mask-image:var(--ornament-mask)] [mask-repeat:no-repeat] [mask-size:100%_100%]`}
        style={{ "--ornament-mask": `url(${mask})` } as React.CSSProperties}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#003be2] text-[#f5f5f6] sm:min-h-[860px] lg:min-h-[1024px]" aria-labelledby="hero-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:120px_120px]"
      />

      <header className="relative z-20 mx-auto flex h-[120px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-[120px]">
        <a className="flex items-center gap-[8px]" href="#top" aria-label="ByteSpace home">
          <Image alt="" height={32} priority src="/hero/logo-mark.svg" width={29} />
          <span className="font-satoshi text-[24px] font-bold leading-none tracking-[-1.2px]">
            ByteSpace
          </span>
        </a>

        <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-[16px] lg:flex">
          <a className={`${navLinkClassName}  leading-[1.2]`} href="#top">Home</a>
          <a className={`${navLinkClassName} leading-[1.6]`} href="#courses">Courses</a>
          <a className={`${navLinkClassName} leading-[1.6]`} href="#creators">Creators</a>
        </nav>

        <nav aria-label="Account navigation" className="flex items-center gap-3 text-[16px] sm:gap-6">
          <a className={`${navLinkClassName} leading-6`} href="/login">Sign In</a>
          <a className={`${navLinkClassName} hidden leading-6 sm:block`} href="/register">Join Us</a>
          <a aria-label="Shopping bag" className={`${navLinkClassName} grid size-6 place-items-center`} href="#bag">
            <Image alt="" height={24} src="/hero/bag.svg" width={24} />
          </a>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 pt-[49px] text-center lg:px-0">
        <div className="flex flex-col items-center gap-5 lg:gap-8">
          <h1 id="hero-heading" className="max-w-[935px] font-poppins text-[42px] font-semibold leading-[120%] tracking-[-0.01em] text-white sm:text-[58px] lg:text-[72px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[820px] font-satoshi text-[16px] font-normal leading-[160%] text-[#e5e6e8] lg:max-w-none lg:whitespace-nowrap lg:text-[18px]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        <form className="mt-10 flex w-full max-w-[581px] flex-col gap-3 sm:mt-[60px] sm:flex-row sm:gap-4" action="#courses">
          <label className="flex h-[52px] flex-1 items-center gap-2 rounded-[24px] bg-white px-6 py-3 text-left">
            <Image alt="" height={24} src="/hero/search.svg" width={24} />
            <input
              aria-label="Search courses"
              className="w-full min-w-0 bg-transparent font-satoshi text-[16px] font-normal leading-[160%] text-[#242528] outline-none placeholder:text-[#82868e] [&::-webkit-search-cancel-button]:appearance-none lg:text-[18px]"
              name="q"
              placeholder="Course, topic, creator"
              type="search"
            />
          </label>
          <button className="h-[52px] rounded-[24px] bg-[#d4fb20] px-6 py-3 font-satoshi text-[18px] font-normal leading-[160%] text-[#242528]" type="submit">
            Search
          </button>
        </form>
      </div>

      <div aria-hidden="true" className="absolute inset-x-1/2 top-0 z-[1] hidden h-[1024px] w-[1440px] -translate-x-1/2 overflow-hidden lg:block">
        <Image className="absolute left-1/2 top-[582px] h-[1149px] w-[1149px] max-w-none -translate-x-1/2" alt="" height={1149} src="/hero/lime-circle.svg" width={1149} />

        <Ornament className="left-[calc(50%+572px)] top-[672px] h-[330px] w-[330px]" color="bg-[#f5f5f6]" mask="/hero/ornament-right-mask.png" source="/hero/ornament-right.png" />
        <Ornament className="left-[calc(50%-645.5px)] top-[221px] h-[385px] w-[385px]" color="bg-[#d4fb20]" mask="/hero/ornament-left-mask.png" source="/hero/ornament-left.png" />
        <Ornament className="left-[calc(50%-449.5px)] top-[477px] h-[175px] w-[175px] scale-x-[-1]" color="bg-[#f5f5f6]" mask="/hero/ornament-left-small-mask.png" source="/hero/ornament-left.png" />
        <Ornament className="left-[calc(50%-531px)] top-[682px] h-[342px] w-[342px]" color="bg-[#f5f5f6]" mask="/hero/ornament-bottom-left-mask.png" source="/hero/ornament-bottom-left.png" />
        <Ornament className="left-[calc(50%+696px)] top-[221px] h-[370px] w-[370px]" color="bg-[#d4fb20]" mask="/hero/ornament-top-right-mask.png" source="/hero/ornament-top-right.png" />
        <Ornament className="left-[calc(50%+480px)] top-[464px] h-[188px] w-[188px]" color="bg-[#f5f5f6]" mask="/hero/ornament-right-small-mask.png" source="/hero/ornament-right-small.png" />

        <Image className="absolute left-1/2 top-[512px] h-[541px] w-[578px] max-w-none -translate-x-1/2 drop-shadow-[51px_73px_72px_rgba(0,0,0,0.13)]" alt="" height={541} src="/hero/hero-person.png" width={578} />

        <div className="absolute left-[404px] top-[639px] rounded-2xl bg-white p-4 text-[#242528] backdrop-blur-[10px]">
          <p className="font-satoshi text-[16px] font-normal leading-[160%]">UI/UX Design</p>
          <div className="mt-0 flex items-start gap-2 font-satoshi text-[#82868e]">
            <span className="text-[12px] leading-[1.6]">200 Courses</span><span className="text-[10px] leading-[1.5]">•</span><span className="text-[12px] leading-[1.6]">1000+ Students</span>
          </div>
        </div>

        <div className="absolute left-[842px] top-[651px] flex flex-col gap-2 rounded-2xl bg-white p-4 text-[#242528] backdrop-blur-[10px]">
          <p className="font-satoshi text-[16px] font-normal leading-[160%]">Learning Progress</p>
          <p className="font-poppins text-[44px] font-semibold leading-[120%] tracking-[-0.01em]">55%</p>
          <div className="h-2 w-[200px] rounded-[24px] bg-[#f6f6f6]"><div className="h-2 w-[112px] rounded-[24px] bg-[#d4fb20]" /></div>
        </div>

        <div className="absolute left-[328px] top-[837px] w-[258px] rounded-2xl bg-white p-4 text-[#242528] backdrop-blur-[10px]">
          <p className="font-satoshi text-[16px] font-normal leading-[160%]">Happy Students</p>
          <p className="flex items-center font-satoshi text-[12px] leading-[1.6]"><span>4.5</span><span className="text-[#82868e]"> (240)</span><Image alt="" className="ml-1" height={16} src="/hero/star.svg" width={16} /></p>
          <div className="mt-1 flex items-center">
            {avatars.map((avatar) => <Image key={avatar} alt="" className="-mr-4 size-[43px] rounded-full" height={43} src={avatar} width={43} />)}
            <Image alt="" className="relative ml-0 size-[43px]" height={43} src="/hero/avatar-count.svg" width={43} />
            <span className="relative -ml-[31px] font-satoshi text-[12px] font-bold leading-[1.5]">2K+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
