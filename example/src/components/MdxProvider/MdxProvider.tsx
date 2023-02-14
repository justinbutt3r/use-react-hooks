import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Provider = ({ children }: Props) => {
  return <MDXProvider>{children}</MDXProvider>;
};

export default Provider;
