import React from "react";
import Button from "@material-ui/core/Button";

type Props = {
  children: string;
};

const PrimaryButton: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Button variant="contained" color="primary">
        {children}
      </Button>
    </>
  );
};

export default PrimaryButton;
