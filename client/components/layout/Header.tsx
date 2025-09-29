export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-brand/95 px-4 py-3 text-brand-foreground shadow-sm backdrop-blur supports-[backdrop-filter]:bg-brand/90">
          <a
            href="/"
            className="font-display text-lg font-extrabold tracking-tight text-white"
          >
            zipplit
          </a>
          <div className="hidden items-center gap-2 md:flex">
            <span className="rounded-full bg-secondary/30 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/10">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
