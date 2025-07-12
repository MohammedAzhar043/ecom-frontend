import { MenuItem } from "@headlessui/react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUp,
  FiRefreshCcw,
  FiRefreshCw,
  FiSearch,
} from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Filter = () => {
  const categories = [
    {
      categoryId: 1,
      categoryName: "Electonics",
    },
    {
      categoryId: 2,
      categoryName: "Clothing",
    },
    {
      categoryId: 3,
      categoryName: "Furniture",
    },
    {
      categoryId: 4,
      categoryName: "Books",
    },
    {
      categoryId: 5,
      categoryName: "Toys",
    },
  ];

  const [searchparams] = useSearchParams();
  const params = new URLSearchParams(searchparams);
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const currentCategory = searchparams.get("category") || "all";
    const currentSortOrder = searchparams.get("sortby") || "asc";
    const currentSeachTerm = searchparams.get("keyword") || "";

    setCategory(currentCategory);
    setSortOrder(currentSortOrder);
    setSearchTerm(currentSeachTerm);
  }, [searchparams]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        searchparams.set("keyword", searchTerm);
      } else {
        searchparams.delete("keyword");
      }
      navigate(`${pathname}?${searchparams.toString()}`);
    }, 700);
    return () => {
      clearTimeout(handler);
    };
  }, [searchparams, searchTerm, navigate, pathname]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === "all") {
      params.delete("category");
    } else {
      params.set("category", selectedCategory);
    }
    navigate(`${pathname}?${params}`);
    setCategory(event.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => {
      const newOrder = prevOrder === "asc" ? "desc" : "asc";
      params.set("sortby", newOrder);
      navigate(`${pathname}?${params}`);
      return newOrder;
    });
  };

  const handleClearFilter = () => {
    navigate({ pathname: window.location.pathname });
  };

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
      {/* search bar  */}
      <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
        <input
          type="text"
          placeholder="search product"
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
        />
        <FiSearch className="absolute left-3 text-slate-800 size={20}" />
      </div>

      {/* this is for category ui  // category seletion */}
      <div className="flex sm:flex-row flex-col gap-4 items-center">
        <FormControl
          variant="outlined"
          size="small"
          className="text-slate-800 border-slate-700"
        >
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={category}
            onChange={handleCategoryChange}
            label="Category"
            className="min-w-[120px] text-slate-800 border-slate-700"
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((item) => (
              <MenuItem key={item.categoryId} value={item.categoryName}>
                {item.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* sort button and button and clear filter  */}

        <Tooltip title="Sorted By price : asc">
          <Button
            variant="contained"
            color="primary"
            className="flex items-center gap-2 h-10"
            onClick={toggleSortOrder}
          >
            Sort By{" "}
            {sortOrder === "asc" ? (
              <FiArrowUp size={20} />
            ) : (
              <FiArrowDown size={20} />
            )}
          </Button>
        </Tooltip>

        <button
          className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300 ease-in shadow-md focus:outline-hidden"
          onClick={handleClearFilter}
        >
          <FiRefreshCw className="font-semibold" size={16} />
          <span className="font-semibold">Clear Filter</span>
        </button>
      </div>
    </div>
  );
};

export default Filter;
