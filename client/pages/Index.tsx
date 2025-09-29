import { useState } from "react";

function SectionHeading({ kicker, title, intro }: { kicker?: string; title: React.ReactNode; intro?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary/80">{kicker}</div>
      )}
      <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base text-muted-foreground">{intro}</p>}
    </div>
  );
}

export default function Index() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent to-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-40 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
              Kochi's fastest
              <span className="hidden sm:inline">seafood & budget meals app</span>
            </div>
            <h1 className="mt-6 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
              <span className="text-primary">zipplit</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              We’re cooking up something special. Zipplit is coming soon to Kochi.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <a
                href="#waitlist"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-secondary"
              >
                Join Waitlist
              </a>
            </div>
            <a href="#better" className="mt-16 inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground">
              <span>Scroll down</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* BETTER FOOD */}
      <section id="better" className="relative mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="soft-card rounded-3xl p-10">
          <SectionHeading
            title={<>
              <span className="font-display text-primary">Better food</span>
              <br />
              for more people
            </>}
            intro="We use the freshest catch and budget-friendly ingredients to bring quality meals to your doorstep — whether it's seafood or everyday favorites."
          />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border p-6 text-center shadow-sm">
              <div className="text-2xl font-extrabold">3,00,000+</div>
              <div className="mt-1 text-sm text-muted-foreground">restaurants</div>
            </div>
            <div className="rounded-2xl border p-6 text-center shadow-sm">
              <div className="text-2xl font-extrabold">800+</div>
              <div className="mt-1 text-sm text-muted-foreground">cities</div>
            </div>
            <div className="rounded-2xl border p-6 text-center shadow-sm">
              <div className="text-2xl font-extrabold">3 Billion+</div>
              <div className="mt-1 text-sm text-muted-foreground">orders delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES AROUND PHONE */}
      <section id="features" className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={<>
            What's waiting for you
            <br />
            on the app?
          </>}
          intro="Our app offers a wide range of food options, from fresh seafood to budget cloud kitchen meals."
        />
        <div className="relative mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left column */}
          <div className="grid gap-6">
            {[
              { emoji: "🍱", title: "Meals", desc: "Cloud Kitchen meals from ₹49" },
              { emoji: "🐟", title: "Seafood", desc: "Fresh catch & hot meals" },
              { emoji: "📦", title: "Call Ahead", desc: "Ready-to-cook packs" },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border p-6 shadow-sm">
                <div className="text-2xl">{f.emoji}</div>
                <div className="mt-2 font-semibold">{f.title}</div>
                <div className="text-sm text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </div>
          {/* Center phone */}
          <div className="order-first mx-auto w-full max-w-xs md:order-none">
            <div className="relative mx-auto aspect-[9/18] w-64 rounded-[2.2rem] border border-black/10 bg-neutral-900 p-2 shadow-xl">
              <div className="h-full rounded-[1.9rem] bg-neutral-100 p-4">
                <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-neutral-300" />
                <div className="mt-10 rounded-2xl bg-gradient-to-b from-primary/15 to-transparent p-6 text-center">
                  <div className="font-display text-3xl font-extrabold text-primary">zipplit</div>
                  <p className="mt-2 text-sm text-neutral-600">Kochi's fastest delivery</p>
                  <div className="mt-5 text-xs text-neutral-600">App coming soon</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right column */}
          <div className="grid gap-6">
            {[
              { emoji: "🎫", title: "Vouchers", desc: "Exclusive deals" },
              { emoji: "🎁", title: "Coupons", desc: "Launch offers" },
              { emoji: "🏪", title: "Collect", desc: "Pick-up option" },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border p-6 shadow-sm">
                <div className="text-2xl">{f.emoji}</div>
                <div className="mt-2 font-semibold">{f.title}</div>
                <div className="text-sm text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOLD SECTION */}
      <section id="gold" className="relative mt-24 bg-neutral-950 py-20 text-neutral-100">
        <div className="absolute inset-0 opacity-30" style={{background:
          "radial-gradient(60% 50% at 30% 10%, rgba(255,215,128,.35), transparent), radial-gradient(50% 40% at 80% 60%, rgba(255,232,154,.2), transparent)"}} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-display text-3xl font-extrabold"><span className="text-white">zipplit</span> <span className="gold-text">GOLD</span></div>
            <p className="mt-2 text-neutral-300">Enjoy a world full of benefits with one membership</p>
            <div className="mt-6 text-sm tracking-widest text-neutral-400">★ GOLD BENEFITS ★</div>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="text-xl font-bold">💰 Free Delivery</div>
              <div className="mt-1 text-sm text-neutral-300">on orders every day / km</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <div className="text-xl font-bold">🎯 Up to 30% extra off</div>
              <div className="mt-1 text-sm text-neutral-300">on 20,000+ partner restaurants</div>
            </div>
          </div>
        </div>
      </section>

      {/* ETERNAL BRANDS */}
      <section id="brands" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-display text-3xl font-extrabold">eternal</div>
          <p className="mt-2 text-sm tracking-widest text-neutral-500">POWERING KOCHI'S CHANGING LIFESTYLE</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "zipplit", desc: "Order fresh seafood and budget cloud kitchen meals from Kochi's best delivery app" },
            { name: "blinkit", desc: "Get groceries delivered to your doorstep in minutes from our quick commerce platform" },
            { name: "district", desc: "Discover and book the best dining, entertainment, and wellness experiences" },
            { name: "hyperpure", desc: "Quality ingredients and supplies for restaurants, delivered fresh every day" },
          ].map((b) => (
            <div key={b.name} className="soft-card rounded-2xl p-6">
              <div className="font-display text-lg font-bold text-primary">{b.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 rounded-3xl bg-gradient-to-b from-accent to-white p-8 md:grid-cols-2 md:p-12">
          <div>
            <h3 className="font-display text-3xl font-extrabold">Be first to know</h3>
            <p className="mt-2 text-muted-foreground">Zipplit app is coming soon. Join the waitlist and we’ll notify you when we launch.</p>
            <WaitlistForm />
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-2xl border p-6 text-center shadow-sm">
              <div className="font-semibold">Coming soon on</div>
              <div className="mt-3 flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-md border px-3 py-1">App Store</span>
                <span className="rounded-md border px-3 py-1">Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
