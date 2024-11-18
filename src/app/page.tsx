import { Footer, Header, MainContent, MovementPhrase } from "./components";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-14 py-6 px-14">
      <Header />

      <MovementPhrase />

      <MainContent />

      <Footer />
    </div>
  );
}
