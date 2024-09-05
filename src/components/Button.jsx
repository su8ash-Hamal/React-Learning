import React from "react";

// Title
const Button = ({ title, isDark }) => {
  return (
    <div
      style={{
        background: `${isDark ? "red" : "var(--primary)"}`,
      }}
    >
      {title} {isDark ? "Dark" : "Light"}
    </div>
  );
};

export default Button;
