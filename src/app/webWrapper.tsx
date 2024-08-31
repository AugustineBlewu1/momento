import React from "react";
import Navbar from "./(components)/Navbar";

const WebWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main>
    <Navbar></Navbar>
    {children}</main>;
};

export default WebWrapper;
