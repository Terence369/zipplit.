import StoreButtons from "@/components/shared/StoreButtons";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-black/5 bg-white/80 px-4 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <a href="/" className="font-display text-lg font-extrabold tracking-tight">
            <span className="text-primary">zipplit</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#features" className="text-foreground/70 hover:text-foreground">Features</a>
            <a href="#gold" className="text-foreground/70 hover:text-foreground">Gold</a>
            <a href="#brands" className="text-foreground/70 hover:text-foreground">Eternal</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#download" className="hidden rounded-full border border-primary/20 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 md:inline-block">
              Download App
            </a>
            <StoreButtons />
          </div>
        </div>
      </div>
    </header>
  );
}
