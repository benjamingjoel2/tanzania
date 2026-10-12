import Link from "next/link";
import type { Post } from "@/data/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative aspect-[16/11] overflow-hidden rounded-none bg-sand">
        <SmartImage
          image={post.image}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-105"
        />
      </div>
      <p className="mt-5 text-sm text-stone">
        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readMins} min read
      </p>
      <h3 className="mt-2 font-display text-2xl leading-tight transition-colors group-hover:text-ocean-ink">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-stone">{post.excerpt}</p>
    </Link>
  );
}
