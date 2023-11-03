import ProductCard from "../../../components/ProductCard";
import { Product } from "../../../products";
import ProductsList from "../../../components/ProductsList";

interface ProductMainInfoProps {
  product: Product;
}

const ProductMainInfo = ({ product }: ProductMainInfoProps) => {
  return (
    <div className="flex flex-col  gap-4">
      <div className=" flex flex-col sm:flex-row gap-8 items-center sm:items-start">
        <div className="w-10/12 lg:w-3/12  ">
          <ProductCard product={product} hoverToShowEffect={false} hideName />
        </div>
        <div className="flex">
          <ProductInfoList product={product} />
        </div>
      </div>
      <hr className="bg-white h-[1px] w-full" />
      <div>
        <Replacements replacements={product.replacements!} />
      </div>
    </div>
  );
};

const ProductInfoList = ({ product }: ProductMainInfoProps) => {
  return (
    <div className="flex flex-col gap-5">
      <ProductInfoRow title="المدينة" value={product.city} />
      <ProductInfoRow title="المقاطعة" value={product.state} />
      <ProductInfoRow title="بلد المنشأ" value={product.country} />
      <ProductInfoRow title="الوصف" value={product.description} />
    </div>
  );
};

const ProductInfoRow = ({
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

const Replacements = ({ replacements }: { replacements: Product[] }) => {
  return (
    <div className="flex flex-col ">
      <p className="text-3xl font-bold text-green-500 mt-5">البدائل</p>
      {replacements?.length ? (
        <ProductsList products={replacements} isOkList />
      ) : (
        <p>لا يوجد بدائل متاحة</p>
      )}
    </div>
  );
};

export default ProductMainInfo;
