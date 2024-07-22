import React from "react";

const SearchInput = ({ setPerPage, setSearchValue, searchValue }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <select
          onChange={(e) => setPerPage(parseInt(e.target.value))}
          className="px-4 py-2 hover:border-indigo-100 outline-none bg-white 
            border border-slate-700 rounded-md text-black
          "
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className="px-4 py-2 focus:border-indigo-100 outline-none bg-white border border-slate-700 rounded-md text-black"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchInput;
