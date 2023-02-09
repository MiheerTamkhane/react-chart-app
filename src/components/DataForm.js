import { useState } from "react";
import { Input, Button, Select } from "@chakra-ui/react";
export const DataForm = ({ submitHandler }) => {
  const [yAxis, setYAxis] = useState("");
  const [xAxis, setXAxis] = useState("");
  const [type, setType] = useState("");
  const [bothAxis, setBothAxis] = useState({ x: [], y: [], type: "" });

  function xAxisHandler(e) {
    let val = e.target.value;
    setXAxis(val);
    let arr = val
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    setBothAxis((prevAxes) => ({ ...prevAxes, x: [...arr] }));
  }
  function yAxisHandler(e) {
    let val = e.target.value;
    setYAxis(val);
    let arr = val
      .split(",")
      .map((item) => parseFloat(item.trim()))
      .filter((item) => item !== "");

    setBothAxis((prevAxes) => ({ ...prevAxes, y: [...arr] }));
  }

  function typeHandler(val) {
    setType(val);
    setBothAxis((prevAxes) => ({ ...prevAxes, type: val }));
  }
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (bothAxis.y.includes(NaN)) {
          alert("All values in y-axis must be number!");
        } else {
          submitHandler(bothAxis);
        }
      }}
    >
      <section>
        <label htmlFor="x-axis-input">
          Enter X-axis values in comma (,) saperated way:
        </label>
        <Input
          value={xAxis}
          required
          variant="filled"
          id="x-axis-input"
          placeholder="X-axis values"
          onChange={xAxisHandler}
        />
      </section>
      <section>
        <label htmlFor="y-axis-input">
          Enter Y-axis values in comma (,) saperated way:
        </label>
        <Input
          value={yAxis}
          required
          variant="filled"
          id="y-axis-input"
          placeholder="Y-axis values"
          onChange={yAxisHandler}
        />
      </section>
      <section>
        <Select
          required
          placeholder="Select graph type"
          value={type}
          onChange={(e) => typeHandler(e.target.value)}
        >
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="area">Area</option>
        </Select>
      </section>

      <div className="btn-wrapper">
        <Button colorScheme="teal" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
