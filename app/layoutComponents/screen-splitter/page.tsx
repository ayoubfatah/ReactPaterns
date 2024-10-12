import React, { ReactNode } from "react";
import clsx from "clsx"; // Import clsx

const LeftSideComp = () => {
  return <h1 className="bg-red-500">Left</h1>;
};

const RightSideComp = () => {
  return <h1 className="bg-blue-500">Right</h1>;
};

// Screen splitter
export default function ScreenSplitterPage() {
  return (
    <SplitScreen rightWidth={2} leftWidth={2}>
      <LeftSideComp />
      <RightSideComp />
    </SplitScreen>
  );
}

// SplitScreen component
type SplitScreenProps = {
  children: React.ReactNode;
  leftWidth?: number;
  rightWidth?: number;
};

export const SplitScreen = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
}: SplitScreenProps) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="flex">
      <div
        className={clsx(
          leftWidth === 1 && "w-full",
          leftWidth === 4 && "w-1/4",
          leftWidth === 2 && "w-1/2",
          leftWidth === 3 && "w-1/3"
        )}
      >
        {left}
      </div>
      <div
        className={clsx(
          rightWidth === 1 && "w-full",
          rightWidth === 4 && "w-1/4",
          rightWidth === 2 && "w-1/2",
          rightWidth === 3 && "w-1/3"
        )}
      >
        {right}
      </div>
    </div>
  );
};
