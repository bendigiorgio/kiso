# Button Component

## Introduction

The `Button` component is an essential and customizable part of the component library built with TypeScript, React, Next.js, and styled using TailwindCSS. This component is based on `@radix-ui/react-slot` and provides various styling variants and sizes for buttons.

## Installation

Before using the `Button` component, ensure that the component library is installed in your project. Refer to the main README for installation instructions.

## Usage

Here’s an example of how to use the `Button` component:

    import { Button } from 'maison-components';

    function MyComponent() {
      return (
        <Button variant="default" size="sm">
          Click me
        </Button>
      );
    }

## Props

The `Button` component supports the following props:

- `variant`: Defines the button's style. Options are `default`, `destructive`, `outline`, `secondary`, `ghost`, and `link`.
- `size`: Defines the size of the button. Options are `default`, `sm`, and `lg`.
- `asChild`: Boolean that determines if the button should be rendered as a child component. Default is `false`.
- ...other standard button HTML attributes.

## Examples

Here's how to use the `Button` component with different variants:

    import { Button } from 'maison-components';

    function MyComponent() {
      return (
        <div>
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      );
    }

## Contributing

Contributions to the `Button` component are welcome. See the contributing guidelines in the main README for more information.

## License

This component is released under the MIT license. See the LICENSE file for more details.
