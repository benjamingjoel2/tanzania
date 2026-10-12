import { Check, X } from "lucide-react";

export function Inclusions({ included, excluded }: { included: string[]; excluded: string[] }) {
  if (!excluded.length || !included.length) {
    const list = included.length ? included : excluded;
    const Icon = included.length ? Check : X;
    return (
      <ul className="grid gap-x-8 sm:grid-cols-2">
        {list.map((i) => (
          <li key={i} className="flex gap-3 border-t border-line py-4">
            <Icon aria-hidden className={included.length ? "mt-0.5 size-5 shrink-0 text-acacia" : "mt-0.5 size-5 shrink-0 text-stone"} />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="border border-line bg-white p-7">
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
      <div className="border border-line bg-sand/50 p-7">
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
