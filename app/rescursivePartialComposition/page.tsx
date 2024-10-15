import React from "react";
import RecursiveComponent from "./Recusrive";

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
  return <RecursiveComponent data={myNestedObject} />;
}
