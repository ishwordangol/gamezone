import React from "react";
import Select from "react-select";

function Reactselect({ label, options, placeholder, isSearchable }) {
  const customStyles = {
    control: () => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderColor: "transparent",
      borderRadius: "0.5rem",
      background: "rgb(243, 244, 246)",
      cursor: "pointer",
    }),

    valueContainer: (provided) => ({
      ...provided,
      padding: "10px",
      fontSize: "14px",
    }),

    input: (provided) => ({
      ...provided,
      paddingTop: "0",
      paddingBottom: "0",
      margin: "0",
    }),

    option: (provided, state) => ({
      ...provided,
      fontSize: "14px",
    }),

    placeholder: (provided) => ({
      ...provided,
      fontSize: "14px",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    indicatorsContainer: (provided) => ({
      ...provided,
      padding: "0px",
    }),

    menu: (provided) => ({
      ...provided,
      borderRadius: "8px",
    }),
  };
  return (
    <div>
      {label && <label className="font-semibold mb-2 block">{label}</label>}
      <Select
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        className="reactSelect"
        isSearchable={isSearchable}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "rgb(249 75 96 / 10%)",
            primary: "#ff4159",
          },
        })}
      />
    </div>
  );
}

export default Reactselect;
