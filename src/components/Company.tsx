import { Company } from "../companies";

interface CompanyProps {
  company: Company;
}

const Company = ({ company }: CompanyProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg p-2 border-2 border-gray-300 cursor-pointer ${
        company.isOk ? "hover:border-green-400 " : "hover:border-red-500"
      } hover:shadow-xl transition duration-300 ease-in-out bg-opacity-25 bg-cover !bg-gradient-to-r from-transparent to-transparent hover:!bg-[url("../../public/blood-israeli-flag.jpg")] bg-no-repeat`}
    >
      <img
        src={company.logo}
        alt={company.name}
        className="w-40 h-40 object-contain"
      />
      <p className="text-lg font-bold">{company.name}</p>
    </div>
  );
};

export default Company;
