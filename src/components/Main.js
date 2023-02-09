import { useState } from "react";
import { DataForm } from "./DataForm";
import { MyChart } from "./MyChart";
import "./Main.css";

export const Main = () => {
  const [data, setData] = useState({});

  function submitHandler(axes) {
    setData(axes);
  }
  console.log(data);
  return (
    <main className="main-conatainer">
      <DataForm submitHandler={submitHandler} />
      <section>
        <MyChart data={data} />
      </section>
    </main>
  );
};
