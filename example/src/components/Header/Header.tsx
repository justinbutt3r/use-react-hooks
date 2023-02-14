import React from "react";
import "./styles.scss";

import hookConfig from "../../../../use-react-hooks/package.json";
import Icon from "./icon";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-info">
          <div className="header-title">useReactHooks</div>
          <div className="header-version">{hookConfig.version}</div>
        </div>
        <div className="header-source">
          <a
            target="_blank"
            title="useReactHooks"
            href={hookConfig?.repository?.url}
            rel="noreferrer"
          >
            <Icon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
