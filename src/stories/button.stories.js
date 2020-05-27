import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../components/button/button.component";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs";

const actionsData = {
  onClick: action("button clicked"),
  onHover: action("hover detected"),
};

const knobs = {
  buttonText: text("Button Text") || "Submit",
  disabled: boolean("Disabled"),
  inverted: boolean("Inverted"),
  size: select("Size", ["small", "medium", "large", "xlarge"]),
};

export default {
  title: "Button",
  parameters: {
    component: Button,
    componentSubtitle: "Renders &Open Button Component",
    backgrounds: [
      { name: "default", value: "#fff", default: true },
      { name: "Turo green", value: "#59d388" },
      { name: "&Open Peach", value: "#f7b69c" },
    ],
  },
};

export const Default = () => (
  <Button
    {...knobs}
    {...actionsData}
    inverted={boolean("Inverted")}
    disabled={boolean("Disabled")}
    buttonText={text("Button Text") || "Default button"}
    size={select("Size", ["small", "medium", "large", "xlarge"])}
  />
);

Default.story = {
  decorators: [withKnobs],
};

export const Turo = () => (
  <Button
    {...actionsData}
    {...knobs}
    tenant={"turo"}
    inverted={boolean("Inverted")}
    disabled={boolean("Disabled")}
    buttonText={text("Button Text") || "Turo button"}
    size={select("Size", ["small", "medium", "large", "xlarge"])}
  />
);

Turo.story = {
  decorators: [withKnobs],
};

export const DefaultDisabled = () => (
  <Button
    {...actionsData}
    {...knobs}
    inverted={boolean("Inverted")}
    buttonText={text("Button Text") || "Disabled"}
    size={select("Size", ["small", "medium", "large", "xlarge"])}
    disabled
  />
);
DefaultDisabled.story = {
  decorators: [withKnobs],
};

export const DefaultInverted = () => (
  <Button
    {...actionsData}
    {...knobs}
    inverted
    disabled={boolean("Disabled")}
    buttonText={text("Button Text") || "Click me"}
    size={select("Size", ["small", "medium", "large", "xlarge"])}
  />
);
DefaultInverted.story = {
  decorators: [withKnobs],
};

export const DefaultAnimated = () => (
  <Button
    {...knobs}
    {...actionsData}
    slide={true}
    inverted={boolean("Inverted")}
    disabled={boolean("Disabled")}
    buttonText={text("Button Text") || "Click me"}
    size={select("Size", ["small", "medium", "large", "xlarge"])}
  />
);
DefaultAnimated.story = {
  decorators: [withKnobs],
};

export const TuroInverted = () => (
  <Button
    {...knobs}
    {...actionsData}
    inverted={true}
    disabled={boolean("Disabled")}
    buttonText={text("Button Text") || "Click me"}
    size={select("Size", ["small", "medium", "large", "xlarge"])}
    tenant={"turo"}
  />
);

TuroInverted.story = {
  decorators: [withKnobs],
};
export const BadAccessibility = () => (
  <Button
    {...actionsData}
    tenant={"bad"}
    buttonText={text("Button Text") || "Submit"}
    disabled={boolean("Disabled")}
    inverted={boolean("Inverted")}
    size={select("Size", ["small", "medium", "large", "xlarge"])}
  />
);

BadAccessibility.story = {
  decorators: [withKnobs],
};
