import React from "react";
import { Form } from "./Form";
import { MyChart } from "./MyChart";
import "./Main.css";

export const Main = () => {
  return (
    <main className="main-conatainer">
      <Form />
      <section>
        <MyChart />
      </section>
    </main>
  );
};
