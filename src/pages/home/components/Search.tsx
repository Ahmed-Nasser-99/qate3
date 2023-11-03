import React from "react";

interface Props {
  searchingFor: string | undefined;
  setSearchingFor: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ searchingFor, setSearchingFor }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col sm:flex-row gap-5 w-11/12 md:w-4/6 lg:4/12">
        <input
          type="text"
          defaultValue={searchingFor}
          className="border-4 text-gray-900 border-gray-300 rounded-lg outline-none dark:focus:border-blue-800 block w-full p-2.5   "
          placeholder="ابحث باسم المنتج بالعربيه او بالانجليزيه"
          id="query"
          onChange={(e) => {
            setSearchingFor(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
