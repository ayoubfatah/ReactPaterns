"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export function hocDataLoader(Component: React.ComponentType<any>) {
  return (props: any) => {
    const [data, setData] = useState("");
    useEffect(() => {
      (async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      })();
    }, []);
    return <Component {...props} data={data} />;
  };
}
