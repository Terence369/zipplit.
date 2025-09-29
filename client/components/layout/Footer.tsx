import StoreButtons from "@/components/shared/StoreButtons";

export default function Footer() {
  return (
    <footer className="mt-24 bg-neutral-950 text-neutral-200" id="footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="font-display text-2xl font-extrabold tracking-tight text-white">zipplit</div>
          <StoreButtons />
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 text-sm leading-6 text-neutral-400">
            <p className="max-w-sm">© 2025 Zipplit. All rights reserved.</p>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-300">About</div>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white">Who We Are</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Work With Us</a></li>
              <li><a href="#" className="hover:text-white">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white">Report Fraud</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-300">For Restaurants</div>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white">Partner With Us</a></li>
              <li><a href="#" className="hover:text-white">Apps For You</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-300">For Delivery Partners</div>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white">Ride with us</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-300">Learn More</div>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-300">Social Links</div>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-neutral-400">Made in Kochi with fresh catch.</div>
      </div>
    </footer>
  );
}
