import ProductsList from "../../components/ProductsList";
import { products } from "../../products";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <ProductsList products={products} />
    </div>
  );
};

export default Home;
