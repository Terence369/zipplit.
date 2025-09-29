import StoreButtons from "@/components/shared/StoreButtons";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-brand/95 px-4 py-3 text-brand-foreground shadow-sm backdrop-blur supports-[backdrop-filter]:bg-brand/90">
          <a href="/" className="font-display text-lg font-extrabold tracking-tight text-white">
            zipplit
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#features" className="text-white/80 hover:text-white">Features</a>
            <a href="#gold" className="text-white/80 hover:text-white">Gold</a>
            <a href="#brands" className="text-white/80 hover:text-white">Eternal</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#download" className="hidden rounded-full border border-primary/30 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 md:inline-block">
              Download App
            </a>
            <StoreButtons />
          </div>
        </div>
      </div>
    </header>
  );
}
