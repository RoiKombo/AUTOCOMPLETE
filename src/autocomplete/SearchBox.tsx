import React from "react";
import { mockData } from "./mockData";

type IinputProps = string;

const handleInput = (input: IinputProps) => {
  if (!input) return;
  const dataSearch = mockData.filter((d) => d.first_name.indexOf(input) > -1);
  console.log("dataSearch", dataSearch);
  if (dataSearch) {
    console.log("alriiiighhhhttt");
  }
};

export const SearchBox = () => {
  return (
    <>
      <input type="text" onChange={(e) => handleInput(e.target.value)} />
    </>
  );
};
