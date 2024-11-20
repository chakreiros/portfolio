import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full w-full">
        <div
          id="banner"
          className="h-1/2 w-full overflow-hidden shadow-md relative"
        >
          <div className="absolute inset-0 blur-sm bg-banner bg-center"></div>
          <h1 className="relative z-10 top-1/4 text-white drop-shadow-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Voluptatibus, officiis dolorem esse impedit eveniet voluptas
            deserunt neque iure.
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
