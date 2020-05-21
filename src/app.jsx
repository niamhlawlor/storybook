import React from "react";
import Button from "components/button/button.component";
import "assets/css/main.css";
import "./app.scss";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <Button buttonText="Get Started" />
      <Button buttonText="Click me" tenant={"turo"} />
      <Button buttonText="Frozen" disabled />
    </div>
  );
}
