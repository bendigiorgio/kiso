"use client";
import { Burger } from "@components/burger";
import { Button } from "@components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/dropdown-menu";
import { cn } from "@lib/utils";
import * as React from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

type NavbarProps = React.HTMLAttributes<HTMLElement> & {
  pages: {
    title: string;
    href: string;
  }[];
  logoImage?: {
    src: string;
    alt: string;
    href?: string;
  };
  LinkComponent?: React.ComponentType<LinkProps>;
  LogoComponent?: React.ReactNode;
  children?: React.ReactNode;
  hamburgerSide?: "left" | "right";
};

const Navbar: React.FC<NavbarProps> = ({
  pages,
  logoImage,
  children,
  className,
  LinkComponent = "a",
  LogoComponent,
  hamburgerSide = "left",
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav
      className={cn("w-screen max-w-full sm:px-6 lg:px-8", className)}
      {...props}
    >
      {/* MOBILE */}
      <div className="mx-auto flex items-center justify-between sm:hidden">
        {hamburgerSide === "left" && (
          <DropdownMenu onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Burger open={open} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {pages.map(({ title, href }) => (
                <DropdownMenuItem key={`${title}-${href}`}>
                  <LinkComponent href={href}>{title}</LinkComponent>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {LogoComponent ||
          (logoImage && (
            <div className="mx-auto">
              {LogoComponent
                ? LogoComponent
                : // eslint-disable-next-line @next/next/no-img-element
                  logoImage && <img src={logoImage.src} alt={logoImage.alt} />}
            </div>
          ))}

        {children}
      </div>
      <div className="hidden items-center justify-between space-x-4 sm:flex">
        <div className="space-x-4">
          {LogoComponent
            ? LogoComponent
            : // eslint-disable-next-line @next/next/no-img-element
              logoImage && <img src={logoImage.src} alt={logoImage.alt} />}
          {pages.map(({ title, href }) => (
            <LinkComponent key={title} href={href}>
              <Button variant="ghost">{title}</Button>
            </LinkComponent>
          ))}
        </div>
        {children}
      </div>
    </nav>
  );
};

export { Navbar };
