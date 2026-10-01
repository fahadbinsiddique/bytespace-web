import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign in | ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

const avatars = ["raw-02.png", "raw-03.png", "raw-04.png", "raw-06.png"] as const;

const limeTint = "sepia(0.28) saturate(1044%) hue-rotate(30deg) brightness(1.29)";
const offWhiteTint = "contrast(0.09) brightness(1.88)";

function CourseCard({
  className,
  cover,
  title,
}: {
  className: string;
  cover: string;
  title: string;
}) {
  return (
    <article className={`absolute size-[373px] overflow-hidden rounded-3xl border border-[#ced0d3] bg-white text-[#242528] ${className}`}>
      <div className="relative mx-[14px] mt-[14px] h-[195px] overflow-hidden rounded-xl bg-[#443131]">
        <Image alt="" className="object-cover" fill sizes="341px" src={cover} unoptimized />
        <div className="absolute bottom-[9px] left-3 flex gap-3">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((tag) => (
            <span className="rounded-3xl bg-[#f6f6f6]/60 px-3 py-1.5 text-xs font-medium leading-5 text-[#4f4f4f] backdrop-blur" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute left-[15px] top-[231px] flex flex-col gap-4">
        <div>
          <h2 className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-0.2px] text-black">{title}</h2>
          <p className="font-satoshi text-[16px] font-normal leading-[160%] text-[#4f4f4f]">
            by <span className="text-[#003be2]">purepearl studio</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-3xl bg-[#f5f5f6] px-3 py-1.5 text-xs font-medium leading-5 text-[#4b4c53]">
            <Image alt="" height={20} src="/figma/login/vector-06.svg" unoptimized width={20} />
            Beginner
          </span>
          <span className="flex items-center">
            {avatars.map((avatar) => (
              <Image alt="" className="-mr-2 size-8 rounded-full" height={32} key={avatar} src={`/figma/login/${avatar}`} unoptimized width={32} />
            ))}
            <span className="relative ml-2 grid size-8 place-items-center">
              <Image alt="" fill src="/figma/login/vector-02.svg" unoptimized />
              <span className="relative text-xs font-medium text-white">26+</span>
            </span>
          </span>
        </div>
        <p className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-0.2px] text-[#003be2]">
          <span className="font-medium">$</span>25<span className="font-satoshi text-[16px] font-normal leading-[160%] tracking-normal text-[#4f4f4f]">/lifetime</span>
        </p>
      </div>
      <p className="absolute right-[15px] top-[231px] flex items-center font-satoshi text-[16px] font-normal leading-[160%] text-[#4f4f4f]">
        4.5 <Image alt="" className="ml-1" height={20} src="/figma/login/vector-06.svg" unoptimized width={20} />
      </p>
    </article>
  );
}

function HappyStudents() {
  const studentAvatars = ["raw-09.png", "raw-11.png", "raw-12.png", "raw-18.png"];

  return (
    <aside className="absolute left-[348px] top-[740px] z-20 flex w-[258px] flex-col gap-1.5 rounded-2xl bg-[#d4fb20] p-3 text-[#242528]" aria-label="Happy students rated 4.5 by 240 people">
      <p className="font-satoshi text-[16px] font-normal leading-[160%]">Happy Students</p>
      <p className="flex items-center text-[10px] leading-5 text-[#424348]"><strong className="mr-1 text-[#242528]">4.5</strong> (240)<Image alt="" className="ml-0.5" height={16} src="/figma/login/vector-07.svg" unoptimized width={16} /></p>
      <div className="flex items-center">
        {studentAvatars.map((avatar) => <Image alt="" className="-mr-[15px] size-[43px] rounded-full border border-white" height={43} key={avatar} src={`/figma/login/${avatar}`} unoptimized width={43} />)}
        <span className="relative ml-[15px] grid size-[43px] place-items-center"><Image alt="" fill src="/figma/login/vector-11.svg" unoptimized /><span className="relative text-[10px] font-medium text-white">2K+</span></span>
      </div>
    </aside>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-[111.111111svh] overflow-hidden bg-[#003be2] [zoom:.9]">
      <div className="relative mx-auto hidden h-[1024px] w-[1440px] xl:block">
        <Image alt="" className="pointer-events-none absolute inset-0" fill priority src="/figma/login/vector-01.svg" unoptimized />
        <header className="absolute left-[122px] top-[35px] z-30 flex items-center gap-2">
          <Link aria-label="ByteSpace home" href="/"><Image alt="" height={31.5} src="/figma/login/vector-04.svg" unoptimized width={28.875} /></Link>
          <span className="font-satoshi text-2xl font-bold tracking-[-1.2px] text-white">ByteSpace</span>
        </header>
        <section className="absolute left-[122px] top-[120px] text-[#f5f5f6]" aria-labelledby="login-pitch">
          <h1 className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-0.2px]" id="login-pitch">Sign in with ease</h1>
          <p className="mt-4 w-[475px] font-satoshi text-[18px] font-normal leading-[160%]">Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.</p>
        </section>
        <CourseCard className="left-[122px] top-[394px] z-10" cover="/figma/login/raw-01.png" title="Build Digital Asset" />
        <CourseCard className="left-[233px] top-[305px] z-20" cover="/figma/login/raw-10.png" title="the Power of Big Data" />

        <Image alt="" className="pointer-events-none absolute left-[151px] top-[320px]  z-[50] -rotate-10" height={147} src="/figma/login/raw-19.png" style={{ filter: limeTint }} unoptimized width={147} />
        
        <Image alt="" className="pointer-events-none absolute left-[470px] top-[626px] z-[50] rotate-300 "  height={176} src="/figma/login/raw-13.png" style={{ filter: offWhiteTint }} unoptimized width={176} />

        <Image alt="" className="pointer-events-none absolute left-[96px] top-[702px] z-[15]" height={189} src="/figma/login/raw-14.png" style={{ filter: limeTint }} unoptimized width={189} />
        <HappyStudents />
        <section className="absolute left-[741px] top-[120px] z-30 h-[784px] w-[579px] rounded-3xl bg-white px-[63px] py-[61px]" aria-labelledby="login-heading">
          <p className="font-satoshi text-[18px] font-normal leading-[160%] text-[#003be2]">Sign In</p>
          <h2 className="font-poppins text-[44px] font-semibold leading-[120%] tracking-[-0.44px] text-[#242528]" id="login-heading">Welcome Back</h2>
          <div className="mt-10 h-[539px]"><LoginForm /></div>
        </section>
      </div>

      <div className="mx-auto flex min-h-screen max-w-[579px] flex-col px-5 py-8 xl:hidden">
        <header className="flex items-center gap-2">
          <Link aria-label="ByteSpace home" href="/"><Image alt="" height={31.5} src="/figma/login/vector-04.svg" unoptimized width={28.875} /></Link>
          <span className="font-satoshi text-2xl font-bold tracking-[-1.2px] text-white">ByteSpace</span>
        </header>
        <section className="mt-12 rounded-3xl bg-white px-6 py-10 sm:px-[63px]" aria-labelledby="mobile-login-heading">
          <p className="font-satoshi text-[18px] font-normal leading-[160%] text-[#003be2]">Sign In</p>
          <h1 className="font-poppins text-[36px] font-semibold leading-[120%] tracking-[-0.44px] text-[#242528]" id="mobile-login-heading">Welcome Back</h1>
          <div className="mt-10 min-h-[539px]"><LoginForm /></div>
        </section>
      </div>
    </main>
  );
}
