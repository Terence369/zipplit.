import StoreButtons from "@/components/shared/StoreButtons";

export default function Footer() {
  return (
    <footer className="mt-24 bg-brand text-brand-foreground" id="footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="font-display text-2xl font-extrabold tracking-tight text-white">zipplit</div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">Coming soon</span>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/70">© 2025 Zipplit. All rights reserved.</div>
      </div>
    </footer>
  );
}
