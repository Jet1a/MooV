"use client";

import Link from "next/link";
import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "next-auth/react";
import { CurrentUser } from "../context/CurrentUserContext";

interface NavbarProps {
  currentUser?: CurrentUser | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
          {currentUser ? (
            <span onClick={() => signOut()}>Logout</span>
          ) : (
            <Link href={"/login"}>
              <span>Sign up / Login</span>
            </Link>
          )}
        </div>

        <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu />
        </button>

        {isOpen && (
          <div className="navbar__dropdown">
            <Link href={"/movies"} onClick={() => setIsOpen(false)}>
              <span>Movie</span>
            </Link>
            <Link href={"/shows"} onClick={() => setIsOpen(false)}>
              <span>Tv Series</span>
            </Link>
            <Link href={"/login"} onClick={() => setIsOpen(false)}>
              {currentUser ? <span>Logout</span> : <span>Sign up / Login</span>}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
