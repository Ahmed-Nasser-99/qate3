import { useParams } from "react-router";
import { products } from "../../products";
import ProductMainInfo from "./components/ProductMainInfo";
import { Link } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const product =
    products.find((product) => product.id === productId) ||
    products
      .flatMap((product) => product.replacements)
      .find((product) => product?.id === productId);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-full md:w-11/12 lg:w-10/12 xl:w-9/12 gap-10">
        <div>
          <Link to="/">
            <button className="p-0 text-gray-50 text-xl">
              {"< "}الرجوع للصفحة الرئيسية
            </button>
          </Link>
          <h1
            className={`${
              product?.isOk ? "text-green-500" : "text-red-500"
            } text-4xl text-center font-extrabold underline`}
          >
            {product?.name}
          </h1>
        </div>
        <ProductMainInfo product={product!} />
      </div>
    </div>
  );
};

export default Product;
