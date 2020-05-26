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
      { name: "twitter", value: "#00aced" },
      { name: "facebook", value: "#3b5998" },
    ],
  },
};

export const Default = () => <Button {...knobs} {...actionsData} />;

Default.story = {
  decorators: [withKnobs],
  parameters: {
    backgrounds: [{ name: "red", value: "rgba(255, 0, 0)" }],
  },
};

export const Turo = () => (
  <Button {...actionsData} {...knobs} tenant={"turo"} />
);

Turo.story = {
  decorators: [withKnobs],
};

export const DefaultDisabled = () => (
  <Button {...actionsData} {...knobs} buttonText="Disabled" disabled />
);
export const DefaultInverted = () => (
  <Button {...actionsData} {...knobs} inverted buttonText={`Click Me`} />
);

export const DefaultAnimated = () => (
  <Button {...actionsData} {...knobs} slide={true} />
);

DefaultAnimated.story = {
  decorators: [withKnobs],
};

export const TuroInverted = () => (
  <Button
    {...actionsData}
    {...knobs}
    inverted
    tenant={"turo"}
    buttonText={`Click Me`}
  />
);

export const BadAccessibility = () => <Button {...actionsData} {...knobs} />;

BadAccessibility.story = {
  decorators: [withKnobs],
};
