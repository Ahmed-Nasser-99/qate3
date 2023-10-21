import { Link } from "react-router-dom";
import { Company } from "../companies";

interface CompanyProps {
  company: Company;
}

const Company = ({ company }: CompanyProps) => {
  return (
    <Link to={`/${company.name}`}>
      <div
        className={`flex flex-col items-center justify-center rounded-lg 
        p-2 border-2 border-gray-300 cursor-pointer ${
          company.isOk ? "hover:border-green-400 " : "hover:border-red-500"
        }  transition duration-300 ease-in-out bg-cover 
        hover:bg-[url("/blood-israeli-flag.png")] bg-blend-color  hover:bg-gray-700`}
      >
        <img
          src={company.logo}
          alt={company.name}
          className="w-48 h-48 object-contain"
        />
        <p className="text-lg font-bold">{company.name}</p>
      </div>
    </Link>
  );
};

export default Company;
