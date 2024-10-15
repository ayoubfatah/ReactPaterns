import React from "react";

export default function logProps(Component: any) {
  return (props: any) => {
    console.log(props);
    return <Component {...props} />;
  };
}
  