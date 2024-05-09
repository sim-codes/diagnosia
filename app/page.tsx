import Nav from "./ui/header";
import Hero from "./ui/hero";

export default function Home() {
  return (
    <main className="grid grid-flow-row min-h-screen p-2 md:p-10 z-10 w-full">
      <Nav />
      <Hero />
    </main>
  );
}
