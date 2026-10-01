import Image from "next/image";

import { footerLinkGroups, legalLinks } from "@/content/footer";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-white px-5 py-16 text-[#242528] sm:px-8 lg:h-[525px] lg:px-0 lg:py-[71px]">
      <Image alt="" aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden max-w-none -translate-x-1/2 lg:block" height={1} src="/figma/footer/top-divider.svg" width={1440} />

      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 lg:gap-[130px]">
        <div className="grid gap-14 lg:grid-cols-[528px_580px] lg:items-end lg:gap-[92px]">
          <div className="flex flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image alt="" height={31.5} src="/figma/footer/logo-mark.svg" width={28.875} />
                <span className="font-satoshi text-2xl font-bold leading-none tracking-[-1.2px]">ByteSpace</span>
              </div>
              <p className="max-w-[528px] font-satoshi text-[16px] font-normal leading-[160%]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <form className="flex max-w-[504px] flex-col gap-4 sm:flex-row sm:gap-6">
                <input aria-label="Email address" className="h-[52px] w-full rounded-full border border-[#ced0d3] px-6 font-satoshi text-[16px] font-normal leading-[160%] outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#003be2] sm:w-[376px]" placeholder="Enter your email" type="email" />
                <button className="h-[48px] rounded-[24px] bg-[#d4fb20] px-6 font-satoshi text-[16px] font-normal leading-[160%] transition-colors hover:bg-[#c0e718] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003be2]" type="submit">
                  Search
                </button>
              </form>
              <p className="max-w-[504px] font-satoshi text-[16px] font-normal leading-[160%]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:gap-x-10 lg:gap-y-0">
            {footerLinkGroups.map((group) => (
              <div className="flex w-[167px] flex-col gap-6" key={group.heading || "categories"}>
                <h3 aria-hidden="true" className="h-6 text-base leading-6 text-transparent">{group.heading}</h3>
                <ul className="flex flex-col gap-4 font-satoshi text-[16px] font-normal leading-[160%]">
                  {group.links.map((item) => <li key={item}><a className="transition-colors hover:text-[#003be2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003be2]" href="#top">{item}</a></li>)}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <Image alt="" aria-hidden className="hidden max-w-full lg:block" height={1} src="/figma/footer/divider.svg" width={1200} />
          <div className="flex flex-col gap-4 font-satoshi text-[16px] font-normal leading-[160%] sm:flex-row sm:items-start sm:justify-between">
            <span>@ 2023 ByteSpace. All rights reserved.</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => <a className="whitespace-nowrap transition-colors hover:text-[#003be2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003be2]" href={link.href} key={link.href}>{link.label}</a>)}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
