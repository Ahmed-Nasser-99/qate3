import Header from "../components/Header";
import CompaniesList from "../components/CompaniesList";
import { companies } from "../companies";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <CompaniesList companies={companies} />
    </div>
  );
};

export default Home;
