import React from "react";

const isObject = (data: any) => typeof data === "object" && data !== null;
export default function RecursiveComponent({ data }: any) {
  if (!isObject(data)) return <li>{data}</li>;

  const pairs = Object.entries(data);
  console.log(pairs);
  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li>
            {key}
            <ul>
              <RecursiveComponent data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
}
