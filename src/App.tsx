import { companies } from "./companies";
import CompaniesList from "./components/CompaniesList";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <CompaniesList companies={companies} />
      <h1 className="text-3xl font-bold underline text-white">
        Free Palestine
      </h1>
    </div>
  );
}

export default App;
