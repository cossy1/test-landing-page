import React from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

interface AppLayoutProp {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProp> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  );
};

export default AppLayout;
