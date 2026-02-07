import EmailForm from "./EmailForm";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl">
        A community for people who create startup ideas
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-xl">
        Share ideas, get real feedback, find builders — and turn ideas into
        products.
      </p>

      <EmailForm />

      <p className="mt-4 text-sm text-gray-500">
        Early access for the first members. No spam.
      </p>
    </section>
  );
}
