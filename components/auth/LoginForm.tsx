import Image from "next/image";
import Link from "next/link";

const fieldClassName =
  "h-[52px] w-full rounded-xl border border-[#e5e6e8] bg-white px-6 font-satoshi text-[16px] font-normal leading-[160%] text-[#242528] outline-none placeholder:text-[#82868e] focus-visible:border-[#003be2] focus-visible:ring-[3px] focus-visible:ring-[#003be2]/15";

export function LoginForm() {
  return (
    <form className="flex flex-1 flex-col" method="post">
      <div className="flex flex-col items-end gap-6">
        <label className="flex w-full flex-col gap-2 font-satoshi text-[16px] font-normal leading-[160%] text-[#242528]">
          Email
          <input
            autoComplete="email"
            className={fieldClassName}
            name="email"
            placeholder="designer@example.com"
            required
            type="email"
          />
        </label>
        <label className="flex w-full flex-col gap-2 font-satoshi text-[16px] font-normal leading-[160%] text-[#242528]">
          Password
          <input
            autoComplete="current-password"
            className={fieldClassName}
            name="password"
            placeholder="********"
            required
            type="password"
          />
        </label>
        <button
          className="rounded-3xl bg-[#d4fb20] px-6 py-3 font-satoshi text-[16px] font-normal leading-[160%] text-[#242528] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#003be2]"
          type="submit"
        >
          Sign In
        </button>
      </div>

      <div className="mt-auto flex flex-col items-center gap-10">
        <div className="flex w-full items-center gap-[11px] text-lg leading-[1.6] text-[#888]" aria-label="Or continue with">
          <span className="h-px flex-1 bg-[#e5e6e8]" />
          <span>or</span>
          <span className="h-px flex-1 bg-[#e5e6e8]" />
        </div>
        <div className="flex items-center gap-4">
          <button
            aria-label="Continue with Google"
            className="grid size-[72px] place-items-center rounded-3xl border border-[#d1d1d1] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#003be2]"
            type="button"
          >
            <Image alt="" height={40} src="/figma/login/vector-05.svg" unoptimized width={40} />
          </button>
          <button
            aria-label="Continue with Facebook"
            className="grid size-[72px] place-items-center rounded-3xl border border-[#d1d1d1] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#003be2]"
            type="button"
          >
            <Image alt="" height={40} src="/figma/login/vector-08.svg" unoptimized width={40} />
          </button>
        </div>
      </div>

      <p className="mt-17 text-center font-satoshi text-[16px] font-normal leading-[160%] text-[#888]">
        New user?
        <Link className="text-[#003be2] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#003be2]" href="/register">
          Create an account
        </Link>
      </p>
    </form>
  );
}
