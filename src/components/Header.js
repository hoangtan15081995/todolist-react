import React from "react";

function Header({ title, subTitle }) {
  return (
    <h1 className="title">
      {title}
      <span>{subTitle}</span>
    </h1>
  );
}

export default Header;
