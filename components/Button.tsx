import React from "react";

type ButtonProps = {
  name: string;
};

const Button = ({ name }: ButtonProps) => {
  return (
    <button className="hover:bg-blue-300 hover:rounded-lg w-auto px-2 h-10 font-bold text-blue-800 uppercase ">
      {name}
    </button>
  );
};

export default Button;
