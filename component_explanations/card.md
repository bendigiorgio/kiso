# Card Component

## Introduction

The `Card` component is a versatile and highly customizable component that serves as a container for content. It is part of the "maison-components" library, built with TypeScript, React, Next.js, and styled using TailwindCSS. The `Card` component also includes several subcomponents like `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`.

## Installation

Before using the `Card` component, ensure that the "maison-components" library is installed in your project. Refer to the main README for installation instructions.

## Usage

Here’s an example of how to use the `Card` component along with its subcomponents:

    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'maison-components';

    function MyComponent() {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>This is a sample card description.</CardDescription>
          </CardContent>
          <CardFooter>Footer Content</CardFooter>
        </Card>
      );
    }

## Subcomponents

- `CardHeader`: Used for containing the header content of the card, typically includes the title.
- `CardTitle`: Renders the title inside the card header.
- `CardDescription`: Provides a space for additional text content or information about the card.
- `CardContent`: The main content area of the card.
- `CardFooter`: Can be used for actions or secondary information.

## Props

All subcomponents accept standard HTML attributes for their respective elements. For example, `Card` and `CardHeader` accept `HTMLDivElement` attributes, `CardTitle` accepts `HTMLHeadingElement` attributes, and `CardDescription` accepts `HTMLParagraphElement` attributes. You can also pass additional classes through the `className` prop.

## Examples

Here's an example of using a Card component with an image, title, description, and a button in the footer:

    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'path_to_your_component_library/card';
    import { Button } from 'maison-components';

    function MyComponent() {
      return (
        <Card>
          <CardHeader>
            <img src="path_to_image" alt="card image" />
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>This is a sample card description.</CardDescription>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
      );
    }

## Contributing

Contributions to the `Card` component are welcome. See the contributing guidelines in the main README for more information.

## License

This component is released under the MIT license. See the LICENSE file for more details.
