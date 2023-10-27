import { Link } from "react-router-dom";
import { Company } from "../companies";

interface CompanyProps {
  company: Company;
  hoverToShowEffect?: boolean;
  hideName?: boolean;
}

const CompanyCard = ({
  company,
  hoverToShowEffect = true,
  hideName = false,
}: CompanyProps) => {
  const cardBody = (
    <div
      className={`flex flex-col items-center justify-center rounded-lg 
        p-2 border-2 border-gray-300 transition duration-300 ease-in-out bg-cover ${
          hoverToShowEffect ? "cursor-pointer" : ""
        }
        ${!company.isOk && "bg-right-top bg-blend-darken"}
        ${
          company.isOk
            ? `${
                hoverToShowEffect
                  ? `hover:border-green-400`
                  : "border-green-400"
              } ${
                hoverToShowEffect
                  ? `hover:bg-[url("/palestine-flag.png")]`
                  : `bg-[url("/palestine-flag.png")]`
              }`
            : `${
                hoverToShowEffect
                  ? `hover:border-red-500 hover:bg-red-900`
                  : "border-red-500 bg-red-900"
              }  ${
                hoverToShowEffect
                  ? `hover:bg-[url("/blood-israeli-flag.png")]`
                  : `bg-[url("/blood-israeli-flag.png")]`
              }`
        } 
        `}
    >
      <img
        src={company.logo}
        alt={company.name}
        className="w-4/5 aspect-square object-contain"
      />
      {!hideName && <p className="text-lg font-bold">{company.name}</p>}
    </div>
  );

  if (hoverToShowEffect) {
    return <Link to={`/${company.id}`}>{cardBody}</Link>;
  } else {
    return cardBody;
  }
};

export default CompanyCard;
