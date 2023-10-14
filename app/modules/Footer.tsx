import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        fontSize: "1.2rem",
        color: "#fff",
        backgroundColor: "#000",
      }}
    >
      All rights reserved. &copy; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
