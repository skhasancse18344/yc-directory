import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export type Author = {
  _id: string;
  name: string;
  image?: string;
};
export type Startup = {
  _id: string;
  title: string;
  author: Author;
  date: string;
  views: number;
  tag: string;
  image: string;
  excerpt: string;
};

export default function StartupCard({ data }: { data: Startup }) {
  const { _id, title, author, date, views, tag, image, excerpt } = data;

  return (
    <article className="group rounded-2xl border-4 border-black/90 bg-white p-4 shadow-[4px_4px_0_rgba(0,0,0,1)] transition hover:translate-y-[-2px] hover:shadow-[6px_6px_0_rgba(0,0,0,1)]">
      {/* Top meta */}
      <div className="mb-3 flex items-center justify-between text-xs text-gray-600">
        <span>{formatDate(date)}</span>
        <div className="flex items-center gap-1">
          <svg className="size-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 20s-7-4.438-7-10a7 7 0 1114 0c0 5.562-7 10-7 10z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span>{views}</span>
        </div>
      </div>

      {/* Title & author */}
      <Link href={`/user/${author?._id}`}>
        <div className="mb-3 flex items-center  gap-2">
          {/* Author avatar or fallback */}
          {author.image ? (
            <Image
              src={author.image}
              alt={author.name}
              width={28}
              height={28}
              className="rounded-full border border-gray-300 object-cover"
            />
          ) : (
            <div className="flex size-7 items-center justify-center rounded-full border border-gray-300 bg-gray-100 text-xs font-bold text-gray-700">
              {author.name.charAt(0).toUpperCase()}
            </div>
          )}
          <p className="text-sm text-gray-600">{author.name}</p>
        </div>
      </Link>
      <div>
        <h3 className="mt-1 mb-3 line-clamp-1 text-lg font-extrabold tracking-tight text-gray-900">
          {title}
        </h3>
      </div>

      {/* Image */}
      <div className="relative mb-3 aspect-[16/9] overflow-hidden rounded-xl border border-black/10">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.2]"
        />
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-gray-900">
          {tag}
        </span>

        <Link
          href={`/startups/${_id}`}
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-800"
        >
          Details
          <svg className="size-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>

      {/* Excerpt */}
      <p className="mt-3 line-clamp-2 text-sm text-gray-600">{excerpt}</p>
    </article>
  );
}
