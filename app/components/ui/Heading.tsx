import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="heading">
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
    </div>
  );
};

export default Heading;
