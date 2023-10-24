import { useParams } from "react-router";
import { companies } from "../../companies";
import CompanyMainInfo from "./components/CompanyMainInfo";

const Company = () => {
  const { companyId } = useParams();
  const company =
    companies.find((company) => company.id === companyId) ||
    companies
      .flatMap((company) => company.replacements)
      .find((company) => company?.id === companyId);
  console.log(companyId, company);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-full md:w-11/12 lg:w-10/12 xl:w-9/12 gap-10">
        <div>
          <h1
            className={`${
              company?.isOk ? "text-green-500" : "text-red-500"
            } text-4xl text-center font-extrabold underline`}
          >
            {company?.name}
          </h1>
        </div>
        <CompanyMainInfo company={company!} />
      </div>
    </div>
  );
};

export default Company;
