import React from "react";

const CreditItem = ({
  label,
  value,
}: {
  label: string;
  value?: string | number | null;
}) => {
  return value ? (
    <div className="__credits__item">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  ) : null;
};

export default CreditItem;
