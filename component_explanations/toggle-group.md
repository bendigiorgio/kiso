# ToggleGroup

The ToggleGroup component allows the user to make single or multiple selections within a group.

## Props

- `type`: Defines whether only one or multiple items can be selected. Options: "single", "multiple".
- `variant`: Defines the style of the toggle group. Options: "default", "filled", "inverse".
- `size`: Defines the size of the toggle group. Options: "default", "sm", "lg".
- `defaultValue`: Defines the default value of the toggle group. Options: string, string[]. Can only be an array if type is set to multiple.

To see the other props that can be passed to this component, check out the [Radix UI documentation](https://www.radix-ui.com/docs/primitives/components/toggle-group).

### Example

```tsx
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "maison-components";

function Example() {
  return (
    <ToggleGroup variant="filled" size="sm">
      <ToggleGroupItem value="option_1">Option 1</ToggleGroupItem>
      <ToggleGroupItem value="option_2">Option 2</ToggleGroupItem>
    </ToggleGroup>
  );
}

export default Example;
```

## ToggleGroupItem

This component represents an individual item within a ToggleGroup.

Props

- Inherits the variant and size props from the parent ToggleGroup.

Example

```tsx
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "maison-components";

function Example() {
  return (
    <ToggleGroup>
      <ToggleGroupItem value="item_1">Item 1</ToggleGroupItem>
      <ToggleGroupItem value="item_2">Item 2</ToggleGroupItem>
    </ToggleGroup>
  );
}

export default Example;
```
