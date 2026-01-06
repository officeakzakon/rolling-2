"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Script1, Script2 } from "./scripts";

interface IProps {
  children: ReactNode;
}

const Provider = ({ children }: IProps) => {
  const [hostname, setHostname] = useState<string | null>(null);

  useEffect(() => {
    const currentUrl = window.location.hostname;

    if (currentUrl) {
      setHostname(currentUrl);
    }
  }, []);

  const scripts = () => {
    switch (true) {
      case hostname === "rollingreserv.info":
        return Script1();
      case hostname === "rollingres.com":
        return Script2();
      default:
        return null;
    }
  };

  return (
    <div>
      {hostname && scripts()}
      {children}
    </div>
  );
};

export default Provider;
