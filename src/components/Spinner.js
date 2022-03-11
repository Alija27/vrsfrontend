import React from "react";

export const Spinner = () => {
  return (
    <div>
      <div
        className="spinner-border m-5 text-indigo"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      ></div>
    </div>
  );
};
