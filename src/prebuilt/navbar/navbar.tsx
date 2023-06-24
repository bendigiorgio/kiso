"use client";
import { cn } from "@/lib";
import * as React from "react";

type NavbarProps = React.HTMLAttributes<HTMLElement> & {
  pages: {
    title: string;
    href: string;
  }[];
  logo?: {
    src: string;
    alt: string;
    href?: string;
  };
  linkComponent?: React.ComponentType<any>;
  children?: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({
  pages,
  logo,
  children,
  className,
  linkComponent = "a",
  ...props
}) => {
  return (
    <nav
      className={cn("w-screen px-2 sm:px-6 lg:px-8 bg-black", className)}
      {...props}
    >
      <div></div>
      <div></div>
    </nav>
  );
};

export { Navbar };
