import CompaniesList from "../../components/CompaniesList";
import { companies } from "../../companies";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <CompaniesList companies={companies} />
    </div>
  );
};

export default Home;
