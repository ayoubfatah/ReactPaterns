"use client";

// 1 - we need to create the context api

import { cloneElement, createContext, useContext, useState } from "react";

// Define the type for the context value
type ModalContextType = {
  openName: string;
  openingWindow: (value: string) => void;
  close: () => void;
};

// Create the context with the defined type
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function Modal({ children }: any) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const openingWindow = (prop: string) => setOpenName(prop);

  return (
    <ModalContext.Provider value={{ openName, openingWindow, close }}>
      {children}
    </ModalContext.Provider>
  );
}

export function Open({
  children,
  opens,
}: {
  children: React.ReactElement<HTMLButtonElement>;
  opens: string;
}) {
  const context = useContext(ModalContext);

  // Check if context is undefined

  if (!context) {
    throw new Error("Open must be used within a Modal");
  }

  const { openingWindow } = context;

  return cloneElement(children as React.ReactElement<any>, {
    onClick: () => openingWindow(opens),
  });
}

export function Window({
  render,
  children,
  name,
}: {
  children: React.ReactElement;
  name: string;
  render: any;
}) {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Window must be used within a Modal");
  }

  const { openName, close } = context;
  function alertSS() {
    alert("wazbie");
  }

  if (openName !== name) {
    return null; // Do not render if the modal is not open
  }

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-0 backdrop-blur-sm z-50 transition-all duration-500">
      <div className="scrollbar-hide fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 transition-all duration-500">
        <button className="absolute top-4 right-6" onClick={close}>
          X
        </button>
        <div> {cloneElement(children, { alertSS: alertSS })}</div>
      </div>
    </div>
  );
}
