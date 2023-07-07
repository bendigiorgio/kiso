import { renderHook } from "@testing-library/react";
import "jest-canvas-mock";
import * as z from "zod";
import { useHookForm } from "./src";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const testSchema = z.object({
  name: z.string().min(3).max(10),
  age: z.number().min(18).max(99),
});

describe("Form Hook Tests", () => {
  it("It should return an object", () => {
    const customForm = renderHook(() =>
      useHookForm({
        schema: testSchema,
      })
    );
    expect(customForm).toBeInstanceOf(Object);
  });
  it("It should have the same properties as the react-hook-form object", () => {
    const customForm = renderHook(() =>
      useHookForm({
        schema: testSchema,
      })
    );
    const classicForm = renderHook(() =>
      useForm<z.infer<typeof testSchema>>({
        resolver: zodResolver(testSchema),
      })
    );

    for (const key in classicForm.result.current) {
      expect(customForm.result.current).toHaveProperty(key);
    }
    expect(customForm.result.current).toHaveProperty("formState");
    expect(customForm.result.current).toHaveProperty("register");
    expect(customForm.result.current).toHaveProperty("handleSubmit");
    expect(customForm.result.current).toHaveProperty("control");
    expect(customForm.result.current).toHaveProperty("watch");
    expect(customForm.result.current).toHaveProperty("reset");
    expect(customForm.result.current).toHaveProperty("setValue");
    expect(customForm.result.current).toHaveProperty("getValues");
    expect(customForm.result.current).toHaveProperty("trigger");
    expect(customForm.result.current).toHaveProperty("setError");
    expect(customForm.result.current).toHaveProperty("clearErrors");
    expect(customForm.result.current).toHaveProperty("formState");
  });

  it("Should allow you to set the default values", () => {
    renderHook(() =>
      useHookForm({
        schema: testSchema,
        defaultValues: {
          name: "John",
          age: 18,
        },
      })
    );
  });
});
