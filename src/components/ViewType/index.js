import React from "react";
import Button from "@material-ui/core/Button";

export default function({ setDetailedView }) {
  return (
    <div className="viewType__wrapper">
      <Button
        variant="outlined"
        onClick={() => {
          setDetailedView(false);
        }}
      >
        Shorthand view
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setDetailedView(true);
        }}
      >
        Detailed gist view
      </Button>
    </div>
  );
}
