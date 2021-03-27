import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const PrettoSlider = withStyles({
  root: {
    color: "#119c9f",
    height: 8,
    backgroundColor: null,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "5px solid #505152",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#9c9d9e"
  }
})(Slider);

export default function CustomizedSlider({ value, min, max, onChange }) {

  return (
        <PrettoSlider
          aria-label="Aplicação miníma"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
        />
  );
}
