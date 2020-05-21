import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../components/button/button.component";

export default { title: "Button" };

const actionsData = {
  onClick: action("onClick"),
};

export const Default = () => <Button buttonText="Default Button" />;
export const DefaultDisabled = () => <Button buttonText="Disabled" disabled />;
export const DefaultInverted = () => (
  <Button {...actionsData} inverted buttonText={`Click Me`} />
);

export const Turo = () => (
  <Button {...actionsData} tenant={"turo"} buttonText={`A button`} />
);

export const TuroDisabled = () => (
  <Button tenant={"turo"} buttonText="Disabled" disabled />
);

export const TuroInverted = () => (
  <Button {...actionsData} inverted tenant={"turo"} buttonText={`Click Me`} />
);
