"use client";

import React from "react";

interface FormProps {
  onSubmit: (event: React.FormEvent) => void; // Ensure correct type
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Form = ({
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}: FormProps) => {
  return (
    <div className="login-container">
      <div className="login-box">
        {title && <h1>{title}</h1>}

        <form onSubmit={onSubmit}>
          <div>{body}</div>

          <div>
            <button type="submit" disabled={disabled}>
              {actionLabel}
            </button>
          </div>
        </form>

        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
};

export default Form;
