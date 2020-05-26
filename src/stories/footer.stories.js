import React from "react";
import { action } from "@storybook/addon-actions";
import Footer from "../components/footer/footer.component";

export default { title: "Footer" };

const actionsData = {
  onSubmit: action("onSubmit"),
  onCancel: action("onCancel"),
};

export const Default = () => <Footer {...actionsData} />;
export const SubmittingDefault = () => <Footer {...actionsData} loading />;
export const Turo = () => <Footer {...actionsData} tenant={"turo"} />;
export const SubmittingTuro = () => (
  <Footer {...actionsData} tenant={"turo"} loading />
);
