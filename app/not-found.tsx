import { DoorMotif } from "@/components/ui/DoorMotif";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center bg-acacia-deep px-5 pt-28 pb-20 text-center text-white">
      <div>
        <DoorMotif className="mx-auto mb-10 max-w-56" />
        <p className="eyebrow text-savanna-light">404 · Off the map</p>
        <h1 className="mt-4 text-h1">This trail has gone cold</h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-white/75">
          Even the best trackers lose a trail sometimes. Let&apos;s get you back to familiar ground.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" variant="primary" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/destinations" variant="outline-light">
            Explore destinations
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
