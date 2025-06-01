import React from "react";
import useDropdownStore from "../../../store/dropdownStore";
import { fontSizeMap, fontWeightMap } from "./styleMaps";

function DropdownPreview() {
  const { label, labelColor, labelFontSize, labelFontWeight } =
    useDropdownStore();

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const labelStyles: React.CSSProperties = {
    color: labelColor,
    fontSize: fontSizeMap[labelFontSize],
    fontWeight: fontWeightMap[labelFontWeight],
  };

  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor="dropdown" style={labelStyles}>
        {label}
      </label>
      <select id="dropdown" name="dropdown">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownPreview;
