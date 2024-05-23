import React from "react";

interface Props {
  message: string;
  onChanges: () => void;
}

const Alert = ({ message, onChanges }: Props) => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{message}</strong> has been Clicked
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onChanges}
        ></button>
      </div>
    </>
  );
};

export default Alert;
