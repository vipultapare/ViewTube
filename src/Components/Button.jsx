import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 rounded-xl bg-gray-200 m-2 hover:bg-gray-400  font-mono">
        {name}
      </button>
    </div>
  );
};

export default Button;
