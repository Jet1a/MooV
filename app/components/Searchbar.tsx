"use client";
import { useState, useEffect } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import "../styles/components/_searchbar.scss";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch] = useDebounce(searchInput, 500);
  const router = useRouter();

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const clearSearchInput = () => {
    setSearchInput("");
  };

  useEffect(() => {
    if (debouncedSearch.trim()) {
      router.push(`/search/?q=${encodeURIComponent(debouncedSearch.trim())}`);
    } else {
      router.push("/");
    }
  }, [debouncedSearch, router]);

  return (
    <div className={`search-bar ${isOpen ? "open" : ""}`}>
      <div className="__container">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <HiOutlineMagnifyingGlass size={25} className="__icon" />
        </button>
        <input
          type="text"
          placeholder="Titles, people, genres"
          className="__input"
          value={searchInput}
          onChange={handleSearchInput}
        />
        {isOpen && (
          <button type="button" onClick={clearSearchInput}>
            <IoMdClose size={18} className="__icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
