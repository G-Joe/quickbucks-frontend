import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

import "./FlagSelect.scss";

const FlagSelect = () => {
  const [selected, setSelected] = useState("NG");

  return (
    <ReactFlagsSelect
      countries={[
        "NG",
        "CD",
        "GM",
        "GH",
        "RW",
        "SL",
        "UK",
        "ZM",
        "KE",
        "ZA",
        "MZ",
        "CM",
      ]}
      showOptionLabel={false}
      showSelectedLabel={false}
      fullWidth={false}
      selected={selected}
      onSelect={(code) => setSelected(code)}
      className="react-flags"
      selectButtonClassName="react-flags-button"
    />
  );
};

export default FlagSelect;
