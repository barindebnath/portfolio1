import React from "react";
import { Header } from "./Header";
import { Nav } from "./Navbar";
import { Totop } from "./Totop";
import { MsgRes } from "./msgRes";

export const App = () => {
  return (
    <>
      <MsgRes id="msg-sent" res="Message Sent Succesfully" />
      <MsgRes id="msg-fail" res="Message Not Sent" />
      <Header />
      <Nav />
      <Totop />
    </>
  );
};
