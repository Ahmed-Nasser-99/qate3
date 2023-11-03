import ProductCard from "../../../components/ProductCard";
import { Company } from "../../../products";
import CompaniesList from "../../../components/ProductsList";

interface ProductMainInfoProps {
  product: Company;
}

const ProductMainInfo = ({ product }: ProductMainInfoProps) => {
  return (
    <div className="flex flex-col  gap-4">
      <div className=" flex flex-col sm:flex-row gap-8 items-center sm:items-start">
        <div className="w-10/12 lg:w-3/12  ">
          <ProductCard company={company} hoverToShowEffect={false} hideName />
        </div>
        <div className="flex">
          <CompanyInfoList company={company} />
        </div>
      </div>
      <hr className="bg-white h-[1px] w-full" />
      <div>
        <Replacements replacements={company.replacements!} />
      </div>
    </div>
  );
};

const CompanyInfoList = ({ company }: ProductMainInfoProps) => {
  return (
    <div className="flex flex-col gap-5">
      <CompanyInfoRow title="المدينة" value={company.city} />
      <CompanyInfoRow title="المقاطعة" value={company.state} />
      <CompanyInfoRow title="بلد المنشأ" value={company.country} />
      <CompanyInfoRow title="الوصف" value={company.description} />
    </div>
  );
};

const CompanyInfoRow = ({
  title,
  value,
}: {
  title?: string;
  value?: string;
}) => {
  return (
    <div className="flex text-2xl ">
      <p>
        <span className=" font-bold ">{title}</span>: {value || "غير معروف"}
      </p>
      &nbsp;
    </div>
  );
};

const Replacements = ({ replacements }: { replacements: Company[] }) => {
  return (
    <div className="flex flex-col ">
      <p className="text-3xl font-bold text-green-500 mt-5">البدائل</p>
      {replacements?.length ? (
        <CompaniesList companies={replacements} isOkList />
      ) : (
        <p>لا يوجد بدائل متاحة</p>
      )}
    </div>
  );
};

export default ProductMainInfo;
