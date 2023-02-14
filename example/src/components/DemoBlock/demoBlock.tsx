import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const DemoBlock = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default DemoBlock;
