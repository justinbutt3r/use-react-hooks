import React from "react";
import Link from "next/link";

import * as useReactHooks from "@justinbutt3r/use-react-hooks";

import "./styles.scss";

const Sidebar = () => {
  const packages = Object.keys(useReactHooks).filter((i) => i !== "default");

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <ul>
          {packages.map((p) => (
            <li key={p}>
              <Link href={`/${p}`}>{p}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
