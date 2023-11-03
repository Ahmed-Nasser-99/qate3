import { Product } from "../products";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: Product[];
  isOkList?: boolean;
  isSearching?: boolean;
}

const ProductsList = ({
  products,
  isOkList = false,
  isSearching = false,
}: ProductsListProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 text-center">
        {isSearching ? (
          <>
            <h1 className="text-3xl font-bold underline text-white">
              نتائج البحث
            </h1>
            <p>اضغط على اي منتج لترى البدائل العربية له ان وجدت</p>
          </>
        ) : (
          !isOkList && (
            <>
              <h1 className="text-3xl font-bold underline text-white">
                المنتجات التابعة لشركات{" "}
                <span className="text-red-500">الكيان الصهيوني </span>{" "}
              </h1>
              <p>اضغط على اي منتج لترى البدائل العربية له ان وجدت</p>
            </>
          )
        )}
      </div>
      {isSearching ? (
        products.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col text-center">
            <h1 className="text-3xl font-bold underline text-white">
              لا توجد منتجات تطابق بحثك
            </h1>
            <p>
              قد يكون المنتج داعم للكيان ولكن غير موجود بعد في قاعده بياناتنا
            </p>
          </div>
        )
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
