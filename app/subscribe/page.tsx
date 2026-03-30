export default function SubscribePage() {
  return (
    <section className="border-b border-[var(--color-border-light)]">
      <div className="container-content py-24 md:py-36">
        <div className="max-w-lg">
          <p className="text-xs tracking-widest uppercase text-[var(--color-iris)] mb-4">
            Subscribe
          </p>
          <h1 className="text-3xl md:text-4xl font-light text-[var(--color-text-primary)] mb-4">
            Exclusive releases. Program updates. No noise.
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-8">
            Subscribe for early access to artist announcements, festival
            programming, and cultural releases from I&apos;M SO ATL.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-[var(--color-border-light)] bg-[var(--color-bg-main)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-iris)]"
            />
            <button
              type="submit"
              className="bg-[var(--color-text-primary)] text-[var(--color-bg-main)] text-sm px-6 py-3 hover:bg-[var(--color-iris)] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-[var(--color-text-secondary)] mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
