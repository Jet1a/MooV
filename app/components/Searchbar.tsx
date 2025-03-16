"use client";
import { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import "../styles/components/_searchbar.scss";
import { usePathname, useRouter } from "next/navigation";
import useSearchRedirect from "../hooks/useSearchRedirect";

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useSearchRedirect(searchInput);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const clearSearchInput = () => {
    setSearchInput("");
    if (pathname === "/search") {
      router.push("/");
    }
  };

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
        {isOpen && searchInput && (
          <button type="button" onClick={clearSearchInput}>
            <IoMdClose size={18} className="__icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
