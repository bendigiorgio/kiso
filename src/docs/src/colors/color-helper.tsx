"use client";
import React from "react";
import { Colord, colord, extend } from "colord";
import { HslColorPicker } from "react-colorful";
import mixPlugin from "colord/plugins/mix";
import namesPlugin from "colord/plugins/names";
import { Popover, PopoverContent, PopoverTrigger } from "@components/popover";
import { useDebouncedState } from "@lib/use-debounced-state";
import { Input } from "@components/input/input";
import { Button } from "@components/button";
import { CopyBlock } from "react-code-blocks";
import { STYLES, TAILWIND_CONFIG, codeStyle } from "assets/templates";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@components/accordion";
import { AccordionTrigger } from "maison-components-core";
extend([mixPlugin, namesPlugin]);

const formatTailwindColors = (colors: Colord[]) => {
  if (!colors.length) return "";
  const colorName = colors[5].toName() ?? "custom";
  const tailwindJson = {
    extend: {
      colors: {
        [colorName]: {
          "50": colors[0].toHex(),
          "100": colors[1].toHex(),
          "200": colors[2].toHex(),
          "300": colors[3].toHex(),
          "400": colors[4].toHex(),
          "500": colors[5].toHex(),
          "600": colors[6].toHex(),
          "700": colors[7].toHex(),
          "800": colors[8].toHex(),
          "900": colors[9].toHex(),
        },
      },
    },
  };
  return JSON.stringify(tailwindJson, null, 2);
};

const ColorHelper = () => {
  const [color, setColor] = useDebouncedState<Colord>(colord("#8c30d3"), 200);
  const [shades, setShades] = React.useState<Colord[]>([]);
  const [startingPoint, setStartingPoint] = React.useState(500);
  const [openTip, setOpenTip] = React.useState<number | null>(null);

  const handleInput = (color: Colord) => {
    if (color.isValid()) {
      setColor(color);
    }
  };

  React.useEffect(() => {
    const baseShades: Colord[] = Array(10).fill(color);

    const newShades = baseShades.map((shade, index) => {
      if (index === 0 && startingPoint === 50) {
        return shade;
      } else {
        if (index * 100 < startingPoint) {
          for (index; index * 100 < startingPoint; index++) {
            shade = shade.lighten(0.09);
          }
          return shade;
        }
        if (index * 100 > startingPoint) {
          for (index; index * 100 > startingPoint; index--) {
            shade = shade.darken(0.09);
          }
          return shade;
        }
      }
      return shade;
    });
    setShades(newShades);
  }, [color, startingPoint]);

  React.useEffect(() => {
    // close tooltip after 1 second
    if (openTip === null) return;

    const handler = setTimeout(() => {
      setOpenTip(null);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [openTip]);

  return (
    <section className="space-y-4 px-4 py-4">
      <div className="max-w-sm">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Color Helper
        </h1>
        <p className="text-muted-foreground">
          Use this to help setup your Tailwindcss colors and create nice shades
          for your projects.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Shades Generator
        </h2>
        <div className="w-fit">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Selected Color:
          </h4>
          <div className="flex-row flex">
            <div>
              <Popover>
                <PopoverTrigger>
                  <div
                    className="w-36 h-16 rounded-md border border-border"
                    style={{ background: color.toHex() }}
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <HslColorPicker
                    color={color.toHsl()}
                    onChange={(e) => {
                      setColor(colord(e));
                    }}
                  />
                </PopoverContent>
              </Popover>
              <Input
                className="h-9 w-36"
                placeholder={color.toHex()}
                onChange={(e) => handleInput(colord(e.target.value))}
              />
            </div>
            <div className="flex flex-col self-end ml-2 w-full">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-2">
                Starting Shade:
              </h4>
              <div className="grid grid-cols-[repeat(10,_minmax(0,_1fr))] w-full gap-1">
                {shades.map((_, index) => (
                  <Button
                    onClick={() =>
                      setStartingPoint(
                        index === 0 ? index + 0.5 * 100 : index * 100
                      )
                    }
                    variant={
                      startingPoint ===
                      (index === 0 ? index + 0.5 * 100 : index * 100)
                        ? "default"
                        : "secondary"
                    }
                    size="sm"
                    key={index}
                    className="h-9"
                  >
                    {index === 0 ? index + 0.5 * 100 : index * 100}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-2">
            Shades:
          </h4>
          <div className="grid grid-cols-[repeat(10,_minmax(0,_1fr))] w-fit gap-2">
            {shades.map((shade, index) => (
              <div
                onClick={() => {
                  //copy to clipboard
                  navigator.clipboard.writeText(shade.toHex());
                  setOpenTip(index);
                }}
                key={`${shade.toHex()}-${index}`}
                className="hover:cursor-pointer group relative"
              >
                {openTip === index && (
                  <div className="absolute -top-12 z-40 left-1/2 text-center bg-card px-2 py-1 border border-border text-sm -translate-x-1/2 rounded-md shadow-sm">
                    <p>Copied!</p>
                  </div>
                )}
                <div
                  className="w-16 h-10 rounded-md border border-border group-hover:scale-y-125 transform origin-bottom transition-transform"
                  style={{ background: shade.toHex() }}
                />
                <p className="text-sm font-medium">
                  {
                    // convert index to number between 50 and 900
                    index === 0 ? index + 0.5 * 100 : index * 100
                  }
                </p>
                <p className="text-xs text-muted-foreground">{shade.toHex()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Accordion type="multiple">
        <AccordionItem value="tailwind">
          <AccordionTrigger>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Generated Tailwind Colors
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            {shades && (
              <CopyBlock
                //@ts-ignore
                customStyle={{
                  width: "fit-content",
                  background: "var(--background)",
                  "overflow-x": " hidden",
                }}
                language="javascript"
                theme={codeStyle}
                text={formatTailwindColors(shades)}
              />
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="tailwindconfig">
          <AccordionTrigger>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Maison Components Tailwindcss Config
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <CopyBlock
              //@ts-ignore
              customStyle={{
                width: "fit-content",
                background: "var(--background)",
                "overflow-x": " hidden",
              }}
              language="javascript"
              theme={codeStyle}
              text={TAILWIND_CONFIG}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="globals">
          <AccordionTrigger>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Maison Components globals.css
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <CopyBlock
              //@ts-ignore
              customStyle={{
                width: "fit-content",
                background: "var(--background)",
                "overflow-x": " hidden",
              }}
              language="javascript"
              theme={codeStyle}
              text={STYLES}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export { ColorHelper };
