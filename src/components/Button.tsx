import React from "react";

interface Props {
  name: string;
  onChanges: () => void;
}

export const Button = ({ name, onChanges }: Props) => {
  return (
    <button
      type="button"
      className="btn btn-outline-primary"
      onClick={onChanges}
    >
      {name}
    </button>
  );
};
