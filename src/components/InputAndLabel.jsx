import React from "react";

function InputAndLabel({ state }) {
  const { label, id, type, handleChange, value } = state;
  const classes = type == "file" && " border-black";
  return (
    <div className="flex flex-col my-3 ">
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      {type != "file" ? (
        <input
          className={"px-2 py-2 border " + classes}
          type={type}
          id={id}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <input
          className={"px-2 py-2 border " + classes}
          type={type}
          id={id}
          onChange={handleChange}
          accept="image/*"
        />
      )}
    </div>
  );
}

export default InputAndLabel;
