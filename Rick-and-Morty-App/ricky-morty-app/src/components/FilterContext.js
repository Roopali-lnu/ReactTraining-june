import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterSpecies, setFilterSpecies] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterOrigin, setFilterOrigin] = useState("");

  const clearFilter = (filterType) => {
    if (filterType === "species") {
      setFilterSpecies("");
    } else if (filterType === "gender") {
      setFilterGender("");
    } else if (filterType === "origin") {
      setFilterOrigin("");
    }
  };

  return (
    <FilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        sortOrder,
        setSortOrder,
        filterSpecies,
        setFilterSpecies,
        filterGender,
        setFilterGender,
        filterOrigin,
        setFilterOrigin,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
