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

export default {
  title: "Button",
  parameters: {
    component: Button,
    componentSubtitle: "Renders &Open Button Component",
  },
};

const actionsData = {
  onClick: action("onClick"),
};

export const Default = () => (
  <Button
    buttonText={text("Button Text") || "Submit"}
    disabled={boolean("Disabled")}
    inverted={boolean("Inverted")}
    size={select("Size", ["small", "medium", "large", "xlarge"])}
  />
);

Default.story = {
  decorators: [withKnobs],
};

export const Turo = () => (
  <Button
    {...actionsData}
    tenant={"turo"}
    buttonText={text("Button Text") || "Button text"}
    disabled={boolean("Disabled")}
    inverted={boolean("Inverted")}
    size={select("Size", ["small", "medium", "large", "xlarge"])}
  />
);

Turo.story = {
  decorators: [withKnobs],
};

export const DefaultDisabled = () => <Button buttonText="Disabled" disabled />;
export const DefaultInverted = () => (
  <Button {...actionsData} inverted buttonText={`Click Me`} />
);

export const DefaultAnimated = () => (
  <Button
    {...actionsData}
    buttonText={text("Button Text") || "Button text"}
    disabled={boolean("Disabled")}
    inverted={boolean("Inverted")}
    slide={true}
  />
);

DefaultAnimated.story = {
  decorators: [withKnobs],
};

export const TuroInverted = () => (
  <Button {...actionsData} inverted tenant={"turo"} buttonText={`Click Me`} />
);

export const BadAccessibility = () => (
  <Button
    buttonText={text("Button Text") || "Default Button"}
    disabled={boolean("Disabled")}
    inverted={boolean("Inverted")}
    tenant={"bad"}
    size={select("Size", ["small", "medium", "large", "xlarge"])}
  />
);

BadAccessibility.story = {
  decorators: [withKnobs],
};
