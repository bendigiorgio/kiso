"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@lib/utils";
import { Button } from "../button";
import { Calendar, CalendarProps } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

type DatePickerProps = {
  calendarProps?: CalendarProps;
  popOverProps?: React.ComponentProps<typeof Popover>;
  triggerComponent?: React.Component<typeof Button> | React.ReactNode;
  variant?: "default" | "range" | "presets";
};

const DatePicker = React.forwardRef(
  (
    {
      calendarProps,
      popOverProps,
      triggerComponent,
      variant = "default",
    }: DatePickerProps,
    ref
  ) => {
    const [date, setDate] = React.useState<Date>();
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    });

    React.useImperativeHandle(ref, () => ({
      getSelectedValue: () => {
        return variant === "range" ? dateRange : date;
      },
    }));

    switch (variant) {
      case "default":
        return (
          <>
            <Popover {...popOverProps}>
              <PopoverTrigger asChild>
                {React.isValidElement(triggerComponent) ? (
                  triggerComponent
                ) : (
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                )}
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  {...calendarProps}
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </>
        );
      case "range":
        return (
          <Popover {...popOverProps}>
            <PopoverTrigger asChild>
              {React.isValidElement(triggerComponent) ? (
                triggerComponent
              ) : (
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[300px] justify-start text-left font-normal",
                    !dateRange && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a dateRange</span>
                  )}
                </Button>
              )}
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                {...calendarProps}
                initialFocus
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        );

      case "presets":
        return (
          <Popover {...popOverProps}>
            <PopoverTrigger asChild>
              {React.isValidElement(triggerComponent) ? (
                triggerComponent
              ) : (
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              )}
            </PopoverTrigger>
            <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
              <Select
                onValueChange={(value) =>
                  setDate(addDays(new Date(), parseInt(value)))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Today</SelectItem>
                  <SelectItem value="1">Tomorrow</SelectItem>
                  <SelectItem value="3">In 3 days</SelectItem>
                  <SelectItem value="7">In a week</SelectItem>
                </SelectContent>
              </Select>
              <div className="rounded-md border">
                <Calendar
                  {...calendarProps}
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                />
              </div>
            </PopoverContent>
          </Popover>
        );
      default:
        throw new Error(`Invalid variant: ${variant}`);
    }
  }
);

DatePicker.displayName = "DatePicker";

export { DatePicker };
