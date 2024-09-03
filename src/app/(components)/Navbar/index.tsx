"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { ArrowUpRightIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const navItems = ["Products", "Integration", "Solution", "Resources"];
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="py-4 sticky top-0 w-full bg-gray-100 ">
      <nav className="container mx-auto flex md:flex-row flex-col justify-between items-start md:items-center px-4 md:px-0">
        {/* Brand Logo */}
        <div className="flex flex-row justify-between mx-0">
          <div className=" flex flex-row">
            <Image
              src={"/momento-logos/logo.png"}
              alt={"Logo"}
              width={30}
              height={20}
            />{" "}
            <span className="text-2xl font-bold">Momento</span>{" "}
          </div>

          {/* Menu Toggle Button for Mobile */}
          <Button
            className="md:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
        {/* Navigation Links */}
        <div
          className={clsx(
            "flex-col md:flex-row md:flex",
            isNavOpen ? "flex" : "hidden",
            "gap-8 mt-4 md:mt0 pl-10"
          )}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-lg font-medium hover:text-gray-700"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div
          className={clsx(
            "flex-col md:flex-row md:flex",
            isNavOpen ? "flex" : "hidden",
            "gap-4 mt-4 md:mt-0 items-center"
          )}
        >
          <a href="#" className="text-lg font-medium hover:text-gray-700">
            Sign in
          </a>
          <Button className="flex items-center">
            Open an account
            <ArrowUpRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
