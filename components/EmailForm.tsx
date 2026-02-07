"use client";

export default function EmailForm() {
  return (
    <form
      action="https://tally.so/r/abcd12"
      method="POST"
      target="_blank"
      className="mt-8 flex w-full max-w-md gap-2"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="you@startup.com"
        className="flex-1 rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
      />

      <button
        type="submit"
        className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-900"
      >
        Join waitlist
      </button>
    </form>
  );
}
