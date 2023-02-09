import React from "react";
import { Input, Button } from "@chakra-ui/react";
export const Form = () => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit data...");
      }}
    >
      <section>
        <label htmlFor="x-axis-input">
          Enter X-axis values in comma (,) saperated way:
        </label>
        <Input variant="filled" id="x-axis-input" placeholder="X-axis values" />
      </section>
      <section>
        <label htmlFor="y-axis-input">
          Enter Y-axis values in comma (,) saperated way:
        </label>
        <Input variant="filled" id="y-axis-input" placeholder="Y-axis values" />
      </section>

      <div className="btn-wrapper">
        <Button colorScheme="teal" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
