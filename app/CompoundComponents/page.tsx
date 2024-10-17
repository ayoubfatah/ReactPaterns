"use client";
import React, { createContext, useState } from "react";

const CompoundContext = createContext<{
  value: string;
  setValue: (val: string) => void;
} | null>(null);

function Form({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState("default");

  return (
    <CompoundContext.Provider value={{ value, setValue }}>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        {children}
      </div>
    </CompoundContext.Provider>
  );
}

function Label({ htmlFor, text }: { htmlFor: string; text: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {text}
    </label>
  );
}

function Input({
  type = "text",
  value,
  handleChange,
  defaultValue,
  placeholder,
  name,
}: any) {
  return (
    <input
      type={type}
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      placeholder={placeholder}
      name={name}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  );
}

function Button({
  onClick,
  children,
  type = "button",
}: {
  onClick: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="mt-3 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {children}
    </button>
  );
}

Form.Label = Label;
Form.Input = Input;
Form.Button = Button;

export default function page() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <Form>
      <div>
        <Form.Label htmlFor="name" text="Name:"></Form.Label>
        <Form.Input
          type="text"
          handleChange={(name: string) => setName(name)}
        />
      </div>
      <div>
        <Form.Label htmlFor="number" text="Phone Number:"></Form.Label>
        <Form.Input
          type="number"
          handleChange={(pass: string) => setPhone(pass)}
        />
      </div>
      <div>
        {" "}
        <Form.Label htmlFor="password" text="Password"></Form.Label>
        <Form.Input
          type="password"
          handleChange={(pass: string) => setPassword(pass)}
        />
      </div>
      <Form.Button
        type="submit"
        onClick={() =>
          alert(`name ${name} : password ${password} , num : ${phone}`)
        }
      >
        Submit
      </Form.Button>
    </Form>
  );
}
