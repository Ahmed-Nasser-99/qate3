import { Company as CompanyType } from "../companies";
import Company from "./CompanyCard";

interface CompaniesListProps {
  companies: CompanyType[];
}

const CompaniesList = ({ companies }: CompaniesListProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-3xl font-bold underline text-white">
          الشركات التابعة <span className="text-red-500">للكيان الصهيوني </span>{" "}
        </h1>
        <p>اضغط على اي شركة لترى البدائل العربية لها ان وجدت</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {companies.map((company, index) => (
          <Company key={index} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompaniesList;
