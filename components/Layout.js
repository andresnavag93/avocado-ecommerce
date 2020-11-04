import React from "react";
import Navbar from "@components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>this is the footer</footer>

      <style jsx>
        {`
          div {
            background: green;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
