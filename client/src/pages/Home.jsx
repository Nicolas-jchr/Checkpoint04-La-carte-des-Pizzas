import PizzaList from "../components/PizzaList";

function Home() {
  return (
    <>
      <header className="homeTitles">
        <h1>La carte des pizzas</h1>
        <h2>Une très grande sélections de pizzas</h2>
      </header>
      <main>
        <PizzaList />
      </main>
    </>
  );
}

export default Home;
