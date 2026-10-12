import type { ImageAsset } from "@/data/types";
import { ImageReveal } from "@/components/ui/Motion";

/** A row of up to four photographs under the page intro. */
export function PhotoStrip({ images }: { images: ImageAsset[] }) {
  const list = images.filter((img, i, all) => all.findIndex((o) => o.src === img.src) === i).slice(0, 4);
  const cols = ["", "md:grid-cols-1", "md:grid-cols-2", "md:grid-cols-3", "md:grid-cols-4"][list.length];
  return (
    <div className="container-x pb-16">
      <div className={`grid grid-cols-2 gap-2.5 ${cols}`}>
        {list.map((img, i) => (
          <ImageReveal
            key={`${img.src}-${i}`}
            image={img}
            className={
              i === 0
                ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[4/5]"
                : i === 3
                  ? "hidden aspect-[4/5] md:block"
                  : "aspect-[4/5]"
            }
            sizes="(min-width: 768px) 25vw, 50vw"
            from="bottom"
          />
        ))}
      </div>
    </div>
  );
}
