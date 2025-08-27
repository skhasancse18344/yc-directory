import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import StartupCard, { Startup } from "@/components/StartupCard";

const items: Startup[] = [
  {
    _id: "1",
    title: "Doordash",
    author: {
      _id: "u1",
      name: "Vinod Gupta",
      image: "https://avatars.githubusercontent.com/u/9919?v=4",
    },
    date: new Date().toISOString(),
    views: 7,
    tag: "Restaurant delivery",
    image:
      "https://images.unsplash.com/reserve/uZYSV4nuQeyq64azfVIn_15130980706_64134efc6e_o.jpg?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "A food delivery restaurantA food delivery restaurantA food delivery restaurantA food delivery...",
  },
  {
    _id: "2",
    title: "creative startup",
    author: {
      _id: "u2",
      name: "Nipunaraj",
      image: "https://avatars.githubusercontent.com/u/9919?v=4",
    },
    date: new Date().toISOString(),
    views: 122,
    tag: "Tech",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    excerpt: "This is a test startup",
  },
  {
    _id: "3",
    title: "YC directory",
    author: {
      _id: "u3",
      name: "Sardorbek",
      image: "https://avatars.githubusercontent.com/u/9919?v=4",
    },
    date: new Date().toISOString(),
    views: 134,
    tag: "YC",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    excerpt: "YC directory YC directory YC directory...",
  },
];

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ searchParams }: PageProps) {
  const sp = await searchParams; // <-- required in Next 15

  const query = typeof sp.query === "string" ? sp.query.toLowerCase() : "";

  const filtered = items.filter((s) => {
    if (!query) return true;
    const haystack =
      `${s.title} ${s.author} ${s.tag} ${s.excerpt}`.toLowerCase();
    return haystack.includes(query);
  });

  return (
    <main className="min-h-screen">
      <Hero />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SearchBar query={query} />
        <h2 className="mt-10 text-xl font-semibold tracking-tight text-white">
          All Startups
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <StartupCard key={s._id} data={s} />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-sm text-white">
              No results for “{query}”.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
