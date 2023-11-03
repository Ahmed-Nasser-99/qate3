import { useState } from "react";
import ProductsList from "../../components/ProductsList";
import { products } from "../../products";
import Search from "./components/Search";

const Home = () => {
  const [searchingFor, setSearchingFor] = useState<string>("");

  const searchedForProducts = products.filter(
    (product) =>
      product.name.includes(searchingFor!) ||
      product?.englishName
        ?.toLocaleLowerCase()
        ?.includes(searchingFor?.toLocaleLowerCase())
  );

  return (
    <div className="flex flex-col gap-10">
      <Search searchingFor={searchingFor} setSearchingFor={setSearchingFor} />
      <ProductsList
        products={searchingFor ? searchedForProducts : products}
        isSearching={!!searchingFor}
      />
    </div>
  );
};

export default Home;
