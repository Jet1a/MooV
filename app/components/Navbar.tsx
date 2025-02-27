"use client";

import Link from "next/link";
import React from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__left">
          <Link href={"/"}>
            <h1 className="navbar__logo">MooV</h1>
          </Link>
          <Link href={"/movies"}>
            <span>Movie</span>
          </Link>
          <Link href={"/shows"}>
            <span>Tv Series</span>
          </Link>
        </div>
        <div className="navbar__right">
          <Searchbar />
          <Link href={"/"}>
            <span>Sign up / Login</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
