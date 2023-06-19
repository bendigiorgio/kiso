# Form Component and useHookForm Hook

## Introduction

The `Form` component and the `useHookForm` hook are part of the "maison-components" library. The `Form` component provides a set of components to build forms, and the `useHookForm` hook helps with form validation using Zod schema.

## Installation

Before using the `Form` component and the `useHookForm` hook, ensure that the "maison-components" library is installed in your project. Refer to the main README for installation instructions.

## Form Component

```tsx
<Form>
  <FormField
    control={...}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */}
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

### Usage

## 1. Create Zod Schema

```tsx
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  age: z.preprocess(
    (a) => (typeof a === "number" ? a : parseInt(z.string().parse(a), 10)),
    z.number().int().positive().min(18).max(140)
  ),
});
```

## 2. Define a form

The useHookForm hook makes it easy to create a form with validation. The hook returns a form object with typing handled for you based on your schema.

```tsx
const form = useHookForm({
  schema: formSchema,
});
```

You can also add in default values and access any other properties as you normally would with the react-hook-forms library. For properties other than the schema and default values you need to add them to the otherProps parameter.

```tsx
const form = useHookForm({
  schema: formSchema,
  defaultValues: {
    username: "John Doe",
    age: 30,
  },
  otherProps: {
    ... Other properties here
  },
});
```

### On Submit Function

```tsx
const onSubmit = (values: z.infer<typeof formSchema>) => {
  console.log(values);
};
```

## 3. Build your form

```tsx
 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Ben" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>

             <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input min={1} type="number" {...field} />
              </FormControl>
              <FormDescription>
                This is your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
```
