"use client";

import InfoBlock from "./info.mdx";
import UsageBlock from "./usage.mdx";
import TypesBlock from "./types.mdx";
import BaseLayout from "@/components/BaseLayout";
import Demo from "./demo";
import Provider from "@/components/MdxProvider";

export default function Page() {
  return (
    <BaseLayout>
      <div className="demo">
        <Demo />
      </div>
      <div className="info mdx-block">
        <Provider>
          <InfoBlock />
        </Provider>
      </div>
      <div className="usage mdx-block">
        <Provider>
          <UsageBlock />
        </Provider>
      </div>
      <div className="types mdx-block">
        <Provider>
          <TypesBlock />
        </Provider>
      </div>
    </BaseLayout>
  );
}