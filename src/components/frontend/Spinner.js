import React from "react";

const Spinner = () => {
  return (
    <div>
      <div>
        <div
          style="border-top-color:transparent"
          class="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
