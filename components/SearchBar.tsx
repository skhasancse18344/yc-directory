"use client";

import { useState } from "react";

export default function SearchBar() {
  const [q, setQ] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: hook to your search action
      }}
      className="mx-auto max-w-3xl"
    >
      <label className="sr-only" htmlFor="search">
        Search Startups
      </label>
      <div className="flex items-center gap-3 rounded-full border-2 border-black/80 bg-white px-4 py-3 shadow-sm">
        <svg
          aria-hidden
          className="size-5 shrink-0 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 21l-4.2-4.2m1.2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          id="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search Startups"
          className="flex-1 bg-transparent text-black outline-none placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="grid size-9 place-items-center rounded-full border border-black bg-black text-white transition hover:bg-black/90"
          aria-label="Search"
        >
          <span className="sr-only">Search</span>
          <svg aria-hidden className="size-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21l-4.2-4.2m1.2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
