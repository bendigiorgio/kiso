import * as z from "zod";
import {
  DeepPartial,
  useForm,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormTypes<T extends z.ZodObject<any, "strip", z.ZodTypeAny>> = {
  schema: T;
  defaultValues?: DeepPartial<z.infer<T>>;
  otherProps?: Exclude<UseFormProps<z.infer<T>>, "defaultValues" | "resolver">;
};

export const useHookForm = <T extends z.ZodObject<any, "strip", z.ZodTypeAny>>({
  schema,
  defaultValues,
  otherProps,
}: FormTypes<T>): UseFormReturn<z.infer<T>> => {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DeepPartial<z.infer<T>>,
    ...otherProps,
  });
  return form;
};
