import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import StartupCard, { Startup } from "@/components/StartupCard";

const items: Startup[] = [
  {
    id: "1",
    title: "Doordash",
    author: "Vinod Gupta",
    date: "August 23, 2025",
    views: 7,
    tag: "Restaurant delivery",
    image:
      "https://images.unsplash.com/photo-1533158326339-7f3cf2404358?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "A food delivery restaurantA food delivery restaurantA food delivery restaurantA food delivery...",
  },
  {
    id: "2",
    title: "creative startup",
    author: "Nipunaraj",
    date: "July 27, 2025",
    views: 122,
    tag: "Tech",
    image:
      "https://images.unsplash.com/photo-1549921296-3a6b8f9b2c8e?q=80&w=1200&auto=format&fit=crop",
    excerpt: "This is a test startup",
  },
  {
    id: "3",
    title: "YC directory",
    author: "Sardorbek",
    date: "July 12, 2025",
    views: 134,
    tag: "YC",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Y_Combinator_logo.svg",
    excerpt: "YC directory YC directory YC directory...",
  },
  // add more items or fetch from your API
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SearchBar />
        <h2 className="mt-10 text-xl font-semibold tracking-tight text-gray-900">
          All Startups
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <StartupCard key={s.id} data={s} />
          ))}
        </div>
      </section>
    </main>
  );
}
