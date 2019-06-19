import React, { createElement as h } from "react";
import { observer } from "mobx-react";
import navBar from "components/navbar";
import footer from "components/footer";
import MainView from "components/MainView";
import APP_MENU from "./menuItems";

export default context => {
  const {
    alertStack: { View: AlertStack },
  } = context;

  const NavBar = navBar(context);
  const Footer = footer(context);

  const ApplicationLayout = ({ children }) => (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
        flexDirection: "column"
      }}
    >
      <NavBar appMenu={APP_MENU()} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexGrow: "1"
        }}
      >
        <MainView>{children}</MainView>
      </div>
      <Footer />
      <AlertStack />
    </div>
  );

  return ({ children }) =>
    h(observer(ApplicationLayout), {
      children
    });
};
