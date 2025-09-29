import { ReactNode } from "react";

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M17.53 12.28c.01 3.1 2.71 4.14 2.74 4.15-.02.07-.43 1.49-1.43 2.95-.86 1.25-1.77 2.5-3.2 2.52-1.4.03-1.85-.81-3.45-.81-1.6 0-2.1.78-3.43.84-1.38.05-2.43-1.35-3.31-2.59-1.8-2.61-3.18-7.37-1.33-10.59.92-1.6 2.56-2.62 4.35-2.65 1.35-.03 2.62.9 3.45.9.83 0 2.38-1.11 4.01-.95.68.03 2.61.28 3.85 2.11-.1.06-2.29 1.33-2.25 3.12zM14.9 3.77c.72-.87 1.2-2.08 1.07-3.27-1.04.04-2.29.69-3.03 1.56-.67.78-1.25 2.03-1.1 3.22 1.17.09 2.35-.61 3.06-1.51z"
      />
    </svg>
  );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 600 600" aria-hidden="true" {...props}>
      <path fill="#00f076" d="M300 0a300 300 0 110 600 300 300 0 010-600z" opacity=".2" />
      <path fill="currentColor" d="M230 175l190 125-190 125V175z" />
    </svg>
  );
}

export function StoreButton({
  href,
  icon,
  title,
  subtitle,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-3 rounded-xl border border-black/10 bg-black text-white px-4 py-3 shadow-sm transition hover:translate-y-[-1px] hover:shadow-md"
    >
      <span className="grid place-items-center rounded-lg bg-white/10 p-1 text-white">
        {icon}
      </span>
      <span className="text-left leading-none">
        <span className="block text-[10px] uppercase opacity-70">{subtitle}</span>
        <span className="block text-sm font-semibold">{title}</span>
      </span>
    </a>
  );
}

export default function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <StoreButton
        href="https://play.google.com/"
        icon={<PlayIcon className="h-5 w-5" />}
        title="Google Play"
        subtitle="GET IT ON"
      />
      <StoreButton
        href="https://www.apple.com/app-store/"
        icon={<AppleIcon className="h-5 w-5" />}
        title="App Store"
        subtitle="Download on the"
      />
    </div>
  );
}
