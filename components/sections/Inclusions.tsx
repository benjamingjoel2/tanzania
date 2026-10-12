import { Check, X } from "lucide-react";

export function Inclusions({ included, excluded }: { included: string[]; excluded: string[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="rounded-2xl bg-white p-7 ring-1 ring-line">
        <h3 className="text-h3">What&apos;s included</h3>
        <ul className="mt-5 space-y-3">
          {included.map((i) => (
            <li key={i} className="flex gap-3">
              <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-acacia" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl bg-sand/50 p-7 ring-1 ring-line">
        <h3 className="text-h3">Not included</h3>
        <ul className="mt-5 space-y-3">
          {excluded.map((i) => (
            <li key={i} className="flex gap-3">
              <X aria-hidden className="mt-0.5 size-5 shrink-0 text-stone" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
