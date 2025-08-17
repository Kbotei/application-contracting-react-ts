import { useState } from "react";

function StateDropDown({ isRequired }: { isRequired: boolean }) {
  const states = [
    { value: "AK", text: "Alaska" },
    { value: "AL", text: "Alabama" },
    { value: "NY", text: "New York" },
    { value: "TN", text: "Tennessee" },
  ];

  const [selectedState, setSelectedState] = useState("");

  return (
    <>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        className="form-select"
        required={isRequired}
      >
        <option value=""></option>

        {states.map((state) => (
          <option key={state.value} value={state.value}>
            {state.text}
          </option>
        ))}
      </select>
    </>
  );
}

export default StateDropDown;
