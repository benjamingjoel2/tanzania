/** Static shell shown while a detail page streams in (also the Suspense boundary for route params). */
export function PageLoading() {
  return (
    <div aria-busy="true" aria-live="polite">
      <div className="flex min-h-[68svh] items-end bg-charcoal">
        <div className="container-x pb-20">
          <div className="h-3 w-40 animate-pulse rounded-full bg-white/20" />
          <div className="mt-6 h-14 w-full max-w-2xl animate-pulse rounded-xl bg-white/15" />
          <div className="mt-4 h-5 w-full max-w-lg animate-pulse rounded-full bg-white/10" />
        </div>
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
