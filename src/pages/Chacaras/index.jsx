import CardList from "@/Components/CardList";
import Header from "@/Components/Header";

export default function Chacaras() {
  return (
    <>
      <Header />
      <main className="p-20">
        <h1>Chácaras</h1>

        <section>
          <CardList />
        </section>
      </main>
    </>
  );
}
