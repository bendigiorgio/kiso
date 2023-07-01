"use client";

import { cn } from "@lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "../popover";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "../command";
import { ChevronsUpDown, Check } from "lucide-react";
import React from "react";
import { Button } from "../button";

type Status = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

type PossibleOptions<T extends Status[]> = T[number]["value"];

interface ComboboxProps<T extends Status[]> {
  data: T;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  itemType?: string;
  onSelect?: (selectedValue: Status) => void;
}

interface ComboboxHandle {
  getValue: () => Status | undefined;
  setValue: (newValue: Status | undefined) => void;
}

function isValueInEnum(
  value: string,
  data: Status[]
): value is PossibleOptions<typeof data> {
  return data.some((item) => item.value === value);
}

const Combobox = React.forwardRef<ComboboxHandle, ComboboxProps<Status[]>>(
  ({ data, side = "bottom", itemType, align = "center", onSelect }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState<Status | undefined>(undefined);

    React.useImperativeHandle(ref, () => ({
      getValue: () => value,
      setValue: (newValue: Status | undefined) => {
        setValue(newValue);
        onSelect && newValue && onSelect(newValue);
      },
    }));

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value ? (
              value.icon ? (
                <span className="flex items-center">
                  {value.icon}
                  <span className="ml-2">{value.label}</span>
                </span>
              ) : (
                value.label
              )
            ) : itemType ? (
              `Select ${itemType}...`
            ) : (
              "Select item..."
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent side={side} align={align} className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder={`Search ${itemType ?? "items"}...`} />
            <CommandEmpty>No {itemType ?? "item"} found.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={(currentValue: string) => {
                    if (!isValueInEnum(currentValue, data)) {
                      console.error("Invalid value passed to onSelect");
                      return;
                    }
                    if (value?.value === currentValue) {
                      setValue(undefined);
                    } else {
                      setValue(
                        data.find((item) => item.value === currentValue)
                      );
                    }
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

Combobox.displayName = "Combobox";

export { Combobox };
