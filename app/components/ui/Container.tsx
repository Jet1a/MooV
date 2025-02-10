"use client";
interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <div className="main__container">{children}</div>;
};

export default Container;
