import LayoutSite from "@/components/layout/LayoutSite";
import { FC, ReactNode } from "react";

interface LoyoutProps {
  children: ReactNode;
}

const layout: FC<LoyoutProps> = ({ children }) => {
  return (
    <LayoutSite>
      <main>{children}</main>
    </LayoutSite>
  );
};

export default layout;
