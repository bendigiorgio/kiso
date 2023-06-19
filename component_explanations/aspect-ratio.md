# AspectRatio Component

## Introduction

`AspectRatio` is a simple and powerful component that is part of a custom component library built with TypeScript, React, Next.js, and styled using TailwindCSS. It is based on the `@radix-ui/react-aspect-ratio` primitive and is specifically designed to make it easy to maintain the aspect ratio of content within a container.

## Installation

Before using the `AspectRatio` component, make sure that the component library is installed in your project. Refer to the main README for installation instructions.

## Usage

Here’s an example of how to use the `AspectRatio` component:

    import { AspectRatio } from 'maison-components';

    function MyComponent() {
      return (
        <AspectRatio>
          {/* Your content goes here */}
        </AspectRatio>
      );
    }

## Props

As `AspectRatio` is a wrapper around the `@radix-ui/react-aspect-ratio` primitive, it supports the same properties as the underlying primitive. Please refer to the [`@radix-ui/react-aspect-ratio` documentation](https://www.radix-ui.com/docs/primitives/components/aspect-ratio) for a complete list of properties and their descriptions.

## Examples

Here is an example where the `AspectRatio` component is used to maintain a 16:9 aspect ratio for a video:

    import { AspectRatio } from 'maison-components';

    function VideoComponent() {
      return (
        <AspectRatio style={{ '--aspect-ratio': '16 / 9' }}>
          <video controls>
            <source src="path_to_video.mp4" type="video/mp4" />
          </video>
        </AspectRatio>
      );
    }

## Contributing

Contributions to the `AspectRatio` component are welcome. See the contributing guidelines in the main README for more information.

## License

This component is released under an MIT license. See the LICENSE file for more details.
