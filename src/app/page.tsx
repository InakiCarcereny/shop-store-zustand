import { Footer, Header, MainContent, MovementPhrase } from "./components";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query =
    typeof searchParams.query === "string" ? searchParams.query : "";

  return (
    <div className="w-screen h-screen flex flex-col gap-14 py-6 px-14">
      <Header />

      <MovementPhrase />

      <MainContent query={query} />

      <Footer />
    </div>
  );
}
