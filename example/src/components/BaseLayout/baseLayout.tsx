import React, { ReactNode } from "react";
import "./styles.scss";

interface Props {
  children?: ReactNode;
}

const BaseLayout = (props: Props) => {
  return (
    <div className="base-layout">
      <div className="base-layout-inner">{props.children}</div>
    </div>
  );
};

export default BaseLayout;
