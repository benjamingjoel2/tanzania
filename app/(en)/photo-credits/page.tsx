import { images } from "@/data/images";
import { photoCredits } from "@/data/photoCredits";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SmartImage } from "@/components/ui/SmartImage";

export const metadata = buildMetadata({
  title: "Photo credits",
  description: "Who took the photographs on the Uhuru Journeys website, the licence each one is used under and where to find the original.",
  path: "/photo-credits",
});

export default function PhotoCreditsPage() {
  return (
    <>
      <PageHero
        size="sm"
        eyebrow="Legal"
        title="Photo credits"
        intro="Who took the photographs on this site, the licence each one is used under and where to find the original."
        image={images.zebra}
        crumbs={[{ label: "Photo credits", href: "/photo-credits" }]}
      />
      <div className="container-x pb-24">
        <div className="prose-uhuru max-w-3xl">
          <p>Many photographs on this website come from Wikimedia Commons and are used under Creative Commons licences. The photographers and licences are listed here rather than on the photos themselves. Follow the source link to see each original and its full licence details.</p>
          <div role="list" className="!mt-10 border-t border-line">
            {photoCredits.map((c) => (
              <div role="listitem" key={c.file} className="!mt-0 flex gap-4 border-b border-line py-6 sm:gap-5">
                <SmartImage image={images[c.imageKey]} width={128} height={96} sizes="128px" loading="lazy" className="h-16 w-20 shrink-0 object-cover sm:h-24 sm:w-32" />
                <div className="min-w-0 text-base leading-relaxed">
                  <p className="font-medium [overflow-wrap:anywhere]">{c.title}</p>
                  <p className="!mt-1 text-stone">
                    {c.author ? <>By {c.author}</> : <>Author named on the source page</>}
                    {" · "}
                    {c.licenceUrl ? (
                      <a href={c.licenceUrl} rel="license noopener" target="_blank">
                        {c.licence}
                      </a>
                    ) : (
                      <>Public domain</>
                    )}
                    {" · "}
                    <a href={c.sourceUrl} rel="noopener" target="_blank">
                      Source on Wikimedia Commons
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p>
            The other photographs on this website come from Unsplash and are used under the{" "}
            <a href="https://unsplash.com/license" rel="noopener" target="_blank">
              Unsplash licence
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
