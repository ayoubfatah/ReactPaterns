import React, { ReactNode } from "react";
import clsx from "clsx"; // Import clsx

const LeftSideComp = () => {
  return (
    <div>
      <h1>Left</h1>
    </div>
  );
};

const RightSideComp = () => {
  return (
    <div>
      <h1>Right</h1>
    </div>
  );
};

// Screen splitter
export default function ScreenSplitterPage() {
  return (
    <SplitScreen rightWidth={3} leftWidth={3} isBlack={false }>
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
  isBlack?: boolean;
};

export const SplitScreen = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
  isBlack = false,
}: SplitScreenProps) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="flex">
      <div
        className={clsx(
          leftWidth === 1 && "w-full",
          leftWidth === 4 && "w-1/4",
          leftWidth === 2 && "w-1/2",
          leftWidth === 3 && "w-1/3",
          isBlack && "bg-red-600"
        )}
      >
        {left}
      </div>
      <div
        className={clsx(
          rightWidth === 1 && "w-full",
          rightWidth === 4 && "w-1/4",
          rightWidth === 2 && "w-1/2",
          rightWidth === 3 && "w-1/3",
          isBlack && "bg-blue-600" , 
          
        )}
      >
        {right}
      </div>
    </div>
  );
};


