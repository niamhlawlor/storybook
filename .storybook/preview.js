import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);
addDecorator((story) => <>{story()}</>);

addParameters({
  backgrounds: [
    { name: "default", value: "#fff", default: true },
    { name: "Turo green", value: "#59d388" },
    { name: "&Open Peach", value: "#f7b69c" },
  ],
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});
