import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);
addDecorator((story) => <>{story()}</>);

// addParameters({
//   options: {
//     storySort: (a, b) =>
//       a[1].kind === b[1].kind
//         ? 0
//         : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
//   },
// });

addParameters({
  backgrounds: [
    { name: "default", value: "#fff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ],
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});
