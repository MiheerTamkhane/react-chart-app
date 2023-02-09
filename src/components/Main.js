import { useState } from "react";
import { DataForm } from "./DataForm";
import { MyChart } from "./MyChart";
import "./Main.css";

export const Main = () => {
  const [data, setData] = useState({ x: [], y: [], type: "" });

  function submitHandler(axes) {
    setData(axes);
  }
  return (
    <main className="main-conatainer">
      <DataForm submitHandler={submitHandler} />
      <section>{data?.y.length > 0 && <MyChart data={data} />}</section>
    </main>
  );
};
