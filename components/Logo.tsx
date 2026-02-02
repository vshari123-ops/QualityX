import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center">
        <svg viewBox="0 0 44 44" className="h-11 w-11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGrad1" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#4F46E5" />
            </linearGradient>
            <linearGradient id="logoGrad2" x1="22" y1="22" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#818CF8" />
              <stop offset="1" stopColor="#6366F1" />
            </linearGradient>
          </defs>

          {/* Q - Clean circular letterform */}
          <circle cx="20" cy="20" r="16" stroke="url(#logoGrad1)" strokeWidth="4" fill="none" />

          {/* Q tail flowing into X - the connection point */}
          <path
            d="M30 30L38 38"
            stroke="url(#logoGrad1)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* X - Second stroke crossing the tail */}
          <path
            d="M38 30L30 38"
            stroke="url(#logoGrad2)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-[22px] font-bold leading-tight tracking-tight text-white">
          Quality<span className="text-primary-300">X</span>
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Services
        </span>
      </div>
    </Link>
  );
}
