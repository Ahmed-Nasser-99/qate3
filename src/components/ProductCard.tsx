import { Link } from "react-router-dom";
import { Product } from "../products";

interface ProductCardProps {
  product: Product;
  hoverToShowEffect?: boolean;
  hideName?: boolean;
}

const ProductCard = ({
  product,
  hoverToShowEffect = true,
  hideName = false,
}: ProductCardProps) => {
  const cardBody = (
    <div
      className={`flex flex-col items-center justify-center rounded-lg aspect-square 
        p-2 border-2 border-gray-300 transition duration-300 ease-in-out bg-cover ${
          hoverToShowEffect ? "cursor-pointer" : ""
        }
        ${!product.isOk && "bg-right-top bg-blend-darken"}
        ${
          product.isOk
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
        src={product.logo}
        alt={product.name}
        className="w-2/3 object-contain"
      />
      {!hideName && <p className="text-lg font-bold">{product.name}</p>}
    </div>
  );

  if (hoverToShowEffect) {
    return <Link to={`/${product.id}`}>{cardBody}</Link>;
  } else {
    return cardBody;
  }
};

export default ProductCard;
