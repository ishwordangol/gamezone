import React from "react";

const MobileInputs = ({ id, label, placeholder }) => {
  return (
    <div className="w-full">
      {<label className="font-semibold mb-2 block">{label}</label>}
      <div className="flex items-center gap-1">
        <div className="flex items-center p-2.5 bg-gray-100 rounded-lg">
          <img
            src="/gamezone/assets/images/flags/uae.png"
            alt="UAEFlag"
            className="h-3"
          />
          <label className="ml-1 text-sm font-semibold">(971)</label>
        </div>
        <div className="flex-1">
          <input
            type="number"
            id={id}
            className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none"
            placeholder={placeholder}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default MobileInputs;
