import Link from "next/link";
import type { Climb } from "@/data/types";
import { Price } from "@/components/ui/Price";
import { DifficultyDots } from "@/components/cards/RouteCard";

export function RouteComparisonTable({ climbs }: { climbs: Climb[] }) {
  return (
    <div className="overflow-x-auto rounded-none bg-white ring-1 ring-line">
      <table className="w-full min-w-[820px] text-left text-sm">
        <caption className="sr-only">Comparison of Kilimanjaro routes</caption>
        <thead className="bg-sand/60 text-xs tracking-wide text-stone uppercase">
          <tr>
            {["Route", "Days", "Difficulty", "Acclimatisation", "Crowds", "Sleeping", "From"].map((h) => (
              <th key={h} scope="col" className="px-5 py-4 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {climbs.map((c) => (
            <tr key={c.slug} className="transition-colors hover:bg-snow">
              <th scope="row" className="px-5 py-5">
                <Link href={`/kilimanjaro/${c.slug}`} className="font-display text-lg underline-offset-4 hover:underline">
                  {c.name}
                </Link>
                <p className="mt-1 max-w-56 text-xs font-normal text-stone">{c.scenery}</p>
              </th>
              <td className="px-5 py-5">{c.days}</td>
              <td className="px-5 py-5">
                <DifficultyDots level={c.difficulty} />
                <span className="mt-1 block text-xs text-stone">{c.difficultyLabel}</span>
              </td>
              <td className="px-5 py-5">{c.acclimatisation}</td>
              <td className="px-5 py-5">{c.crowds}</td>
              <td className="px-5 py-5">{c.accommodation}</td>
              <td className="px-5 py-5 font-medium">
                From <Price usd={c.priceFrom} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
