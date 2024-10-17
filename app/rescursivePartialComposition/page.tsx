import React from "react";
import RecursiveComponent from "./Recusrive";
import { RedButton, GreenSmallButton } from "./composition";
import { BlueButtonPartial } from "./Partial";

const myNestedObject = {
  key1: "value1 ",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

export default function () {
  return (
    <>
      <RecursiveComponent data={myNestedObject} />
      {/* Composition */}
      <RedButton text="red" />
      <RedButton text=" small red" size="small" />

      <GreenSmallButton text="small green" />
      <BlueButtonPartial text="this is blue" />
    </>
  );
}
