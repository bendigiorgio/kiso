import React, { useEffect } from "react";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";

export const DocsContainer: typeof BaseContainer = ({ children, context }) => {
  const dark = useDarkMode();

  useEffect(() => {
    const { darkClass, lightClass } =
      // @ts-ignore
      context.store.projectAnnotations.parameters.darkMode;
    const [addClass, removeClass] = dark
      ? [darkClass, lightClass]
      : [lightClass, darkClass];
    document.body.classList.remove(removeClass);
    document.body.classList.add(addClass);
  }, [dark]);

  return (
    <BaseContainer context={context} theme={dark ? themes.dark : themes.light}>
      {children}
    </BaseContainer>
  );
};
