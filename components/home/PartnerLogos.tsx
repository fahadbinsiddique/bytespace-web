import Image from "next/image";

import { partnerLogos } from "@/content/partners";

export function PartnerLogos() {
  return (
    <section className="bg-[#f5f5f6]" aria-label="Our partners">
      <div className="mx-auto flex min-h-[202px] max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-8 px-6 py-10 sm:gap-x-[72px] sm:py-[80px]">
        {partnerLogos.map((logo) => (
          <Image
            key={logo.src}
            alt=""
            aria-hidden="true"
            height={logo.height}
            src={logo.src}
            width={logo.width}
          />
        ))}
      </div>
    </section>
  );
}
