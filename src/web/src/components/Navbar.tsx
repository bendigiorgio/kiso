"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "kiso-core/dropdown-menu";
import { Burger } from "kiso-core/burger";
import { Button } from "kiso-core/button";

import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "kiso-core/separator";

const Navbar = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  return (
    <header className="fixed top-0 inset-0 h-16 md:px-20 px-4 border-b rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm">
      <nav className="h-full items-center flex flex-row">
        <DropdownMenu onOpenChange={setMenuActive}>
          <DropdownMenuTrigger className="md:hidden block mr-8" asChild>
            <Burger open={menuActive} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <a className="hover:cursor-pointer" href="/#installation">
              <DropdownMenuItem>Installation</DropdownMenuItem>
            </a>
            <a href="/#next">
              <DropdownMenuItem>Next Steps</DropdownMenuItem>
            </a>
            <a
              className="hover:cursor-pointer"
              href="https://bendigiorgio.github.io/kiso"
            >
              <DropdownMenuItem>Documentation</DropdownMenuItem>
            </a>
            <Separator className="my-2" />
            <a
              className="hover:cursor-pointer"
              href="https://github.com/bendigiorgio/kiso"
            >
              <DropdownMenuItem className="space-x-2">
                <Star className=" h-[14px] w-[14px]" /> <p>Star us on GitHub</p>
              </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
        <a
          href="/#home"
          className="font-bold text-xl md:hidden flex-row flex items-center whitespace-nowrap space-x-1"
        >
          <span className="text-base font-normal">基礎</span> <span>kiso</span>
        </a>
        <ul className="gap-6 h-full items-center hidden md:flex flex-row w-full text-sm">
          <li>
            <a href="/#home" className="font-bold text-xl mr-6">
              <span className="text-base font-normal">基礎</span> kiso
            </a>
          </li>
          <li>
            <a href="/#installation">Installation</a>
          </li>
          <li>
            <a href="/#next">Next Steps</a>
          </li>
          <li>
            <Link
              className="w-[167px]"
              href="https://bendigiorgio.github.io/kiso"
            >
              Documentation
            </Link>
          </li>
          <li className="ml-auto">
            <Link href="https://github.com/bendigiorgio/kiso">
              <Button
                className="text-xs flex flex-row items-center space-x-2"
                size="sm"
                variant="ghost"
              >
                <Star className=" h-[14px] w-[14px]" /> <p>Star us on GitHub</p>
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
